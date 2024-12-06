import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        padding: 30,
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
    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableMergeRow: {
        flexDirection: 'row',
    },
  
    tableCol: {
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableMergeCol: {
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCell: {
        margin: 5,
        fontSize: 10,
        textAlign: 'center',
    },
    tableMergeCell: {
        padding: '5px',
        border: 'solid',
        textAlign: 'center',
        borderWidth: 1,
        fontSize: 10,
        borderColor: '#000000',
        borderLeft: 'none',
        borderBottom: 'none'
    },
    tableMergeRightMostCell: {
        padding: '5px',
        border: 'solid',
        textAlign: 'center',
        borderWidth: 1,
        fontSize: 10,
        borderColor: '#000000',
        borderLeft: 'none',
        borderBottom: 'none',
        borderRight: 'none'
    },
    tableMergeDataCol: {
        
        // borderStyle: 'solid',
        // borderColor: '#000000',
        // borderWidth: 0,
        // borderLeftWidth: 0,
        // borderTopWidth: 0,      
    },
    tableMergeDataCell: {
        padding: "5px",
        border: 'solid',
        textAlign: 'center',
        borderWidth: 1,
        fontSize: 10,
        borderColor: '#000000',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none'
    },
    tableMergeRightMostDataCell: {
        padding: "5px",
        border: 'solid',
        textAlign: 'center',
        borderWidth: 1,
        fontSize: 10,
        borderColor: '#000000',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none'
    },
});

const AddTable = ({actualHeight = 842, availableHeight = 842, tableHeaders, tableData, left = 0}) => {
    var hasSubtitles = tableHeaders.some(header => Array.isArray(header.subtitles) && header.subtitles.length > 0);

    const renderHeaders = () => (
        <View style={hasSubtitles ? styles.tableMergeRow : styles.tableRow}>
            {tableHeaders.map((header, index) => (
                <View key={index} style={[styles.tableCol, { width: header.width }]}>
                    <Text style={styles.tableCell}>{header.displayname}</Text>
                    {hasSubtitles && (
                        <View style={styles.tableRow}>
                            {header.subtitles && header.subtitles.map((subtitle, subIndex) => (
                                <View
                                    key={subIndex}
                                    style={{
                                        width: subtitle.subtitleWidth,
                                    }}
                                >
                                    <Text style={(header.subtitles.length - 1) === subIndex ? styles.tableMergeRightMostCell : styles.tableMergeCell}>{subtitle.displayname}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            ))}
        </View>
    );

    const renderTableRows = (updatedHeight) => (
        tableData.map((dataRow, rowIndex) => {
            return (
                <View style={hasSubtitles ? styles.tableRow : styles.tableRow} key={rowIndex} >
                    {tableHeaders.map((header, index) => (
                        <View key={index} style={[styles.tableCol, { width: header.width }]}>
                            {header.subtitles.length === 0 ? (
                                <Text style={styles.tableCell}> {dataRow[header.name]?.value || '-'}</Text>
                            ) : (
                                <View style={styles.tableRow}>
                                    {header.subtitles.map((subtitle, subIndex) => (
                                        <View key={subIndex} style={{ width: subtitle.subtitleWidth }}>
                                            <Text style={(header.subtitles.length - 1) === subIndex ? styles.tableMergeRightMostDataCell : styles.tableMergeDataCell}>{dataRow[subtitle.name]?.value || '-'}</Text>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    ))}
                </View>
            );
        })
    );

    try {
        let updatedHeight = availableHeight;
        return (
            <View style={[styles.table, { left: left }]} >
                {renderHeaders()}
                {renderTableRows(updatedHeight)}
            </View>
        );
    } catch (e) {
        console.error('Error rendering table:', e);
        return <Text>Error Rendering Table!! - {e}</Text>;
    }
};

export default AddTable