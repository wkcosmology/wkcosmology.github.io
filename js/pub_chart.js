var background = "#20272d"
var g3 = {
    backgroundColor: background,
    height: "100%",
    width: "50%",
    x: "0%",
    y: "0%",
    type: "ring",
    title: {
        text: "Publications",
        "font-color": "white",
        "font-size": 30,
        "font-family": "Raleway",
    },
    plot: {
        "value-box": {
            text: "%pie-total-value",
            placement: "center",
            "font-color": "white",
            "font-size": 50,
            "font-family": "Georgia",
            "font-weight": "bold",
            rules: [
                {
                    rule: "%p != 0",
                    visible: false,
                },
            ],
        },
        tooltip: {
            text: "%t: %v (%npv%)",
            "font-color": "black",
            "font-family": "Raleway",
            "text-alpha": 1,
            "background-color": "white",
            alpha: 0.7,
            "border-width": 1,
            "border-color": "#cccccc",
            "line-style": "solid",
            "border-radius": "10px",
            padding: "10%",
            placement: "node:center",
        },
        slice: "50%",
        "border-width": 0,
    },
    plotarea: {
        "margin-top": "16%",
    },
    series: [
        {
            values: [2],
            "background-color": "#937cb9",
            text: "MNRAS",
        },
        {
            values: [1],
            "background-color": "#3c5492",
            text: "ApJ",
        },
        {
            values: [3],
            "background-color": "#01b5ec",
            text: "JCAP",
        },
        {
            values: [1],
            "background-color": "#7cc9e7",
            text: "RAA",
        },
        {
            values: [3],
            "background-color": "#79827b",
            text: "Others",
        },
    ],
};

var g4 = {
    backgroundColor: background,
    height: "100%",
    width: "40%",
    x: "50%",
    y: "0%",
    type: "ring",
    title: {
        text: "Citations",
        "font-color": "white",
        "font-size": 30,
        "font-family": "Raleway",
    },
    plot: {
        "value-box": {
            text: "%pie-total-value",
            placement: "center",
            "font-color": "white",
            "font-size": 50,
            "font-family": "Georgia",
            "font-weight": "bold",
            rules: [
                {
                    rule: "%p != 0",
                    visible: false,
                },
            ],
        },
        tooltip: {
            text: "%t: %v (%npv%)",
            "font-color": "black",
            "font-family": "Raleway",
            "text-alpha": 1,
            "background-color": "white",
            alpha: 0.7,
            "border-width": 1,
            "border-color": "#cccccc",
            "line-style": "solid",
            "border-radius": "10px",
            padding: "10%",
            placement: "node:center",
        },
        slice: "50%",
        "border-width": 0,
    },
    plotarea: {
        "margin-top": "16%",
    },
    series: [
        {
            values: [4],
            "background-color": "#937cb9",
            text: "MNRAS",
        },
        {
            values: [7],
            "background-color": "#3c5492",
            text: "ApJ",
        },
        {
            values: [19],
            "background-color": "#01b5ec",
            text: "JCAP",
        },
        {
            values: [3],
            "background-color": "#7cc9e7",
            text: "RAA",
        },
        {
            values: [15],
            "background-color": "#79827b",
            text: "Others",
        },
    ],
};


var chartJSON = {
    backgroundColor: background,
    graphset: [g3, g4],
};

zingchart.render({
    id: "myChart",
    height: "100%",
    width: "100%",
    data: chartJSON,
});
