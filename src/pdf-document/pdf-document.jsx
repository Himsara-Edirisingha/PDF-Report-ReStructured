import React from 'react'
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import AddBarChart from '../pdf-components/pdf-bar-chart';
import AddPieChart from '../pdf-components/pdf-pie-chart';
import AddImage from '../pdf-components/pdf-image';
import AddTable from '../pdf-components/pdf-table';
import AddText from '../pdf-components/pdf-text';
//import { getJsonData2, getTableData, getTableHeaders } from '../mock-data/data';


const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    section: {
        marginBottom: 10,
    },
    heading: {
        fontSize: 18,
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
    },
});

const PDFDocument = ({ orientation = "landscape",structure,data }) => {
    const pages = [];
    const renderPages = () => {
        //console.log(data);    
        //orientation="landscape"
        //orientation="portrait"
        try {
            pages.push(
                <Page size="A4" style={styles.page} orientation={orientation}>
                    {structure && structure.map((component, index) => {
                        switch (component.type) {
                            case 'Pie':
                                return <AddPieChart key={index} data={data[component.datasetname]} centerX={100} centerY={100} radius={100} left={component.left} />;
                            case 'Bar':
                                return <AddBarChart key={index} data={data[component.datasetname]} width={1000} height={200} left={component.left} />;
                            case 'Image':
                                return <AddImage key={index} src={data[component.datasetname]} width={component.width} height={component.height} left={component.left} top={component.top} isFixed={component.isfixed} />;
                            case 'Table':
                                return <AddTable key={index} actualHeight={842} availableHeight={842} tableHeaders={data[component.headersetname]} tableData={data[component.datasetname]} left={component.left} />
                            case 'Text':
                                return <AddText key={index} content={"hello,-world,-javascript"}  lineseperator= {'-'}></AddText>;
                            default:
                                return <AddText key={index} content={"Unsupported component type"}></AddText>;
                        }
                    })}
                </Page>
            );

        } catch (error) {
           
        }
        return pages;
    };
    return (
        <Document>
            {renderPages()}
        </Document>
    );
};





export default PDFDocument