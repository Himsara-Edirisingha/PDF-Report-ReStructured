const getTableHeaders = () => {
    return [
        {
            name: "id",
            displayname: "ID",
            width: '35%',
            subtitleWidth: '50%',
            subtitles: [
                { name: "test011", displayname: "Test Sub 01", subtitleWidth: '30%' },
                { name: "test012_1", displayname: "Test Sub 02", subtitleWidth: '50%' },
                { name: "test012_2", displayname: "Test3", subtitleWidth: '20%' }
            ]
        },
        {
            name: "item",
            displayname: "Item",
            width: '40%',
            subtitleWidth: '50%',
            subtitles: [
                { name: "test021", displayname: "Test Sub 03", subtitleWidth: '50%' },
                { name: "test022", displayname: "Test Sub 04", subtitleWidth: '50%' }
            ]
        },
        {
            name: "price",
            displayname: "Price",
            width: '15%',
            subtitleWidth: '100%',
            subtitles: []
        },
        {
            name: "hello",
            displayname: "Hello",
            width: '10%',
            subtitleWidth: '100%',
            subtitles: []
        }
    ];
};

const getTableData = () => {
    return [
        {
            test011: { value: "Hello" },
            test012_1: { value: "Test01" },
            item: { value: "Laptop" },
            price: { value: "$999.99" },
            hello: { value: "Hjsjfbsd" }
        },
        {
            test011: { value: 2 },
            test012_1: { value: "Test 02" },
            item: { value: "Phone" },
            price: { value: "$599.99" },
            hello: { value: "Hjsjfbsd" }
        },
        {
            test011: { value: 93 },
            test012_1: { value: "Test 18" },
            item: { value: "Laptop" },
            price: { value: "$599.99" },
            hello: { value: "Hjsjfbsd" }
        },
        {
            test011: { value: 19 },
            test012_1: { value: "Test 49" },
            item: { value: "Camera" },
            price: { value: "$299.99" },
            hello: { value: "Hjsjfbsd" }
        },
        {
            test011: { value: 22 },
            test012_1: { value: "Test 73" },
            item: { value: "Headphones" },
            price: { value: "$699.99" },
            hello: { value: "Hjsjfbsd" }
        },
        {
            test011: { value: 44 },
            test012_1: { value: "Test 19" },
            item: { value: "Phone" },
            price: { value: "$499.99" },
            hello: { value: "Hjsjfbsd" }
        }
    ];
};

const getJsonData = () => {
    return [
        { label: "Red", colour: "#FF0000", count: "300" },
        { label: "Blue", colour: "#0000FF", count: "50" },
        { label: "Yellow", colour: "#FFD700", count: "100" },
        { label: "hello", colour: "#15C1BF", count: "150" },
        { label: "hello 3", colour: "#1550BF", count: "150" },
        { label: "hello 4", colour: "#1780BF", count: "120" }
    ];
};


const getJsonData2 = () => {
    return [
        { label: "Red2", colour: "#FF0000", count: "80" },
        { label: "Blue2", colour: "#0000FF", count: "40" },
        { label: "Yellow2", colour: "#FFD700", count: "60" },
        { label: "hello2", colour: "#15C1BF", count: "36" },
        { label: "hello 3", colour: "#1550BF", count: "43" },
        { label: "hello 4", colour: "#1780BF", count: "22" }
    ];
};


const getBarChartData = () => {
    return [
        { label: 'January', value: 40, color: '#007bff' },
        { label: 'February', value: 30, color: '#28a745' },
        { label: 'March', value: 25, color: '#dc3545' },
        { label: 'April', value: 20, color: '#ffc107' },
        { label: 'April1', value: 40, color: '#15C1BF' },
        { label: 'April2', value: 22, color: '#ffc107' },
        { label: 'April3', value: 29, color: '#1550BF' },
        { label: 'April4', value: 60, color: '#ffc107' }
    ];
};

const getAllDataAsJson = () => {
    return {
        tableHeaders: getTableHeaders(),
        tableData: getTableData(),
        jsonData:getJsonData(),
        jsonData2: getJsonData2(),
        barChartData: getBarChartData(),
        imagesrc:"http://localhost:3001/assets/user.png"
    };
};

const getReportStructure = () => {
    return [
        {
            "id": "1",
            "left": 20,
            "top": 20,
            "type": 'Pie',
            "height": 200,
            "width":300,
            "datasetname":"jsonData2",
            "isfixed":false
        },
        {
            "id": "2",
            "left": 0,
            "top": 288,
            "type": 'Table',
            "height": 200,
            "datasetname":"tableData",
            "headersetname":"tableHeaders",
            "width":300,
            
            "isfixed":false
        },
        {
            "id": "3",
            "left": 0,
            "top": 192,
            "type": 'Bar',
            "height": 200,
            "width":300,
            "datasetname":"barChartData",
            "isfixed":false
        },
        {
            "id": "4",
            "left": 0,
            "top": 0,
            "type": 'Image',
            "height": 300,
            "width":300,
            "datasetname":"imagesrc",
            "isfixed":false
        },
        {
            "id": "5",
            "left": 0,
            "top": 497,
            "type": 'Pie',
            "height": 200,
            "width":300,
            "datasetname":"jsonData",
            "isfixed":false
        }
    ]
};

export { getBarChartData, getTableData, getTableHeaders, getJsonData2, getReportStructure, getAllDataAsJson };
