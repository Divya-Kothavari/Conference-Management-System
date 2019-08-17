import { Component } from '@angular/core'
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";

let chartistCode = require('../../../assets/data/syntax/charts/chartistCode.json');
let chartistData = require('../../../assets/data/charts/chartist.json');
declare var require: any

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    templateUrl: './chartist.component.html'
})

export class ChartistComponent {

    //Code Highlight
    chartistLineCode: string
    chartistLineScatterCode: string
    chartistLineAreaCode: string
    chartistBiPolarBarCode: string
    chartistStackedBarCode: string
    chartistHorizontalBarCode: string
    chartistGaugeCode: string
    chartistDonutCode: string

    ngOnInit(): void {
        
        //Code Highlight
        this.chartistLineCode = chartistCode.chartistLineCode;
        this.chartistLineScatterCode = chartistCode.chartistLineScatterCode;
        this.chartistLineAreaCode = chartistCode.chartistLineAreaCode;
        this.chartistBiPolarBarCode = chartistCode.chartistBiPolarBarCode;
        this.chartistStackedBarCode = chartistCode.chartistStackedBarCode;
        this.chartistHorizontalBarCode = chartistCode.chartistHorizontalBarCode;
        this.chartistGaugeCode = chartistCode.chartistGaugeCode;
        this.chartistDonutCode = chartistCode.chartistDonutCode;
    }

    //Line Chart
    lineChart: Chart = {
        type: 'Line',
        data: {
            "labels": [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
            ],
            "series": [
                [2, 11, 6, 8, 15],
                [2, 8, 3, 4, 9]
            ]
        },
        options: {
            low: 0,
            fullWidth: true,
            onlyInteger: true,
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false
            }
        }
    }

    //Line Scatter Chart
    lineScatterChart: Chart = {
        type: 'Line',
        data: chartistData ['lineScatterChartData'],
        options: {
            showLine: false,
            axisX: {
                labelInterpolationFnc: function (value: number, index: number): string {
                    return index % 13 === 0 ? `W${value}` : null;
                },
                showGrid: false
            },
            axisY: {
                scaleMinSpace: 30,
            }
        },
        responsiveOptions: [
            [
                'screen and (min-width: 640px)',
                {
                    axisX: {
                        labelInterpolationFnc: function (value: number, index: number): string {
                            return index % 4 === 0 ? `W${value}` : null;
                        }
                    }
                }
            ]
        ]
    }

    //Line Area Chart
    lineAreaChart: Chart = {
        type: 'Line',
        data: chartistData ['lineAreaChartData'],
        options: {
            low: 0,
            showArea: true,
            fullWidth: true,
            onlyInteger: true,
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false
            }
        },
        responsiveOptions: [
            ['screen and (max-width: 640px) and (min-width: 381px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }],
            ['screen and (max-width: 380px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 3 === 0 ? value : null;
                    }
                }
            }]
        ]
    }

    //Bi Polar Bar Chart
    biPolarBarChart: Chart = {
        type: 'Bar',
        data: chartistData ['biPolarChartData'],
        options: {
            axisX: {
                labelInterpolationFnc(value: number, index: number): number | null {
                    return index % 2 === 0 ? value : null;
                }
            },
            high: 10,
            low: -10
        }
    }

    //Stacked Bar Chart
    stackedBarChart: Chart = {
        type: 'Bar',
        data: chartistData ['stackedBarChartData'],
        options: {
            axisY: {
                labelInterpolationFnc: function(value: number) {
					return (value / 1000) + 'k';
				}
            },
            stackBars: true
        }
    }

    //Horizontal Bar Chart
    horizontalBarChart: Chart = {
        type: 'Bar',
        data: chartistData ['horizontalBarChartData'],
        options: {
            seriesBarDistance: 10,
			reverseData: true,
			horizontalBars: true,
			axisY: {
				offset: 70
			}
        }
    }

    //Gauge Chart
    gaugeChart: Chart = {
        type: 'Pie',
        data: chartistData ['gaugeChartData'],
        options: {
            donut: true,
            showLabel: false,
            startAngle: 270,
            total: 200
        }
    }

    //Donut Chart
    donutChart: Chart = {
        type: 'Pie',
        data: chartistData ['donutChartData'],
        options: {
            donut: true,
			donutWidth: 60,
			donutSolid: true,
			startAngle: 270,
			showLabel: true
        }
    }
}    