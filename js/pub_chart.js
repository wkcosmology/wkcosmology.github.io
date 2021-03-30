var g3 = {
    backgroundColor: "none",
    height: "100%",
    width: "40%",
    x: "0%",
    y: "0%",
    type: "ring",
    title: {
        text: "Publications",
        "font-color": "yellow",
        "font-size": 30,
        "font-family": "Raleway",
    },
    plot: {
        "value-box": {
            text: "%pie-total-value",
            placement: "center",
            "font-color": "yellow",
            "font-size": 35,
            "font-family": "Raleway",
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
            "background-color": "#cc0000",
            text: "MNRAS",
        },
        {
            values: [1],
            "background-color": "#ff3300",
            text: "ApJ",
        },
        {
            values: [3],
            "background-color": "#ff6600",
            text: "JCAP",
        },
        {
            values: [1],
            "background-color": "#ff9933",
            text: "RAA",
        },
        {
            values: [3],
            "background-color": "#ffcc00",
            text: "Others",
        },
    ],
};

var g4 = {
    backgroundColor: "none",
    height: "100%",
    width: "40%",
    x: "45%",
    y: "0%",
    type: "ring",
    title: {
        text: "Citations",
        "font-color": "yellow",
        "font-size": 30,
        "font-family": "Raleway",
    },
    plot: {
        "value-box": {
            text: "%pie-total-value",
            placement: "center",
            "font-color": "yellow",
            "font-size": 35,
            "font-family": "Raleway",
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
            "background-color": "#cc0000",
            text: "MNRAS",
        },
        {
            values: [1],
            "background-color": "#ff3300",
            text: "ApJ",
        },
        {
            values: [3],
            "background-color": "#ff6600",
            text: "JCAP",
        },
        {
            values: [1],
            "background-color": "#ff9933",
            text: "RAA",
        },
        {
            values: [3],
            "background-color": "#ffcc00",
            text: "Others",
        },
    ],
};


var chartJSON = {
    backgroundColor: "none",
    graphset: [g3, g4],
};

zingchart.render({
    id: "myChart",
    height: "100%",
    width: "100%",
    data: chartJSON,
});
