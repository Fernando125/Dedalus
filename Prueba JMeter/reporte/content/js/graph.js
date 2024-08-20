/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 1876.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 7.0], [0.7, 7.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 8.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 8.0], [2.2, 8.0], [2.3, 8.0], [2.4, 8.0], [2.5, 8.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 9.0], [3.3, 9.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 9.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 9.0], [5.5, 9.0], [5.6, 9.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 10.0], [6.6, 10.0], [6.7, 10.0], [6.8, 10.0], [6.9, 10.0], [7.0, 10.0], [7.1, 10.0], [7.2, 10.0], [7.3, 10.0], [7.4, 10.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 11.0], [8.2, 11.0], [8.3, 11.0], [8.4, 11.0], [8.5, 11.0], [8.6, 11.0], [8.7, 11.0], [8.8, 11.0], [8.9, 11.0], [9.0, 11.0], [9.1, 11.0], [9.2, 11.0], [9.3, 11.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 11.0], [10.2, 11.0], [10.3, 11.0], [10.4, 11.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 12.0], [11.4, 12.0], [11.5, 12.0], [11.6, 12.0], [11.7, 12.0], [11.8, 12.0], [11.9, 12.0], [12.0, 12.0], [12.1, 12.0], [12.2, 12.0], [12.3, 12.0], [12.4, 12.0], [12.5, 12.0], [12.6, 12.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 13.0], [13.4, 13.0], [13.5, 13.0], [13.6, 13.0], [13.7, 13.0], [13.8, 13.0], [13.9, 13.0], [14.0, 13.0], [14.1, 13.0], [14.2, 13.0], [14.3, 13.0], [14.4, 13.0], [14.5, 13.0], [14.6, 13.0], [14.7, 13.0], [14.8, 13.0], [14.9, 13.0], [15.0, 13.0], [15.1, 13.0], [15.2, 13.0], [15.3, 13.0], [15.4, 13.0], [15.5, 13.0], [15.6, 14.0], [15.7, 14.0], [15.8, 14.0], [15.9, 14.0], [16.0, 14.0], [16.1, 14.0], [16.2, 14.0], [16.3, 14.0], [16.4, 14.0], [16.5, 14.0], [16.6, 14.0], [16.7, 14.0], [16.8, 14.0], [16.9, 14.0], [17.0, 14.0], [17.1, 14.0], [17.2, 14.0], [17.3, 14.0], [17.4, 14.0], [17.5, 14.0], [17.6, 15.0], [17.7, 15.0], [17.8, 15.0], [17.9, 15.0], [18.0, 15.0], [18.1, 15.0], [18.2, 15.0], [18.3, 15.0], [18.4, 15.0], [18.5, 15.0], [18.6, 15.0], [18.7, 15.0], [18.8, 15.0], [18.9, 15.0], [19.0, 15.0], [19.1, 15.0], [19.2, 15.0], [19.3, 15.0], [19.4, 16.0], [19.5, 16.0], [19.6, 16.0], [19.7, 16.0], [19.8, 16.0], [19.9, 16.0], [20.0, 16.0], [20.1, 16.0], [20.2, 16.0], [20.3, 16.0], [20.4, 16.0], [20.5, 16.0], [20.6, 16.0], [20.7, 16.0], [20.8, 16.0], [20.9, 16.0], [21.0, 16.0], [21.1, 16.0], [21.2, 17.0], [21.3, 17.0], [21.4, 17.0], [21.5, 17.0], [21.6, 17.0], [21.7, 17.0], [21.8, 17.0], [21.9, 17.0], [22.0, 17.0], [22.1, 17.0], [22.2, 17.0], [22.3, 17.0], [22.4, 17.0], [22.5, 17.0], [22.6, 17.0], [22.7, 17.0], [22.8, 17.0], [22.9, 18.0], [23.0, 18.0], [23.1, 18.0], [23.2, 18.0], [23.3, 18.0], [23.4, 18.0], [23.5, 18.0], [23.6, 18.0], [23.7, 18.0], [23.8, 18.0], [23.9, 18.0], [24.0, 18.0], [24.1, 18.0], [24.2, 18.0], [24.3, 18.0], [24.4, 18.0], [24.5, 18.0], [24.6, 19.0], [24.7, 19.0], [24.8, 19.0], [24.9, 19.0], [25.0, 19.0], [25.1, 19.0], [25.2, 19.0], [25.3, 19.0], [25.4, 19.0], [25.5, 19.0], [25.6, 19.0], [25.7, 19.0], [25.8, 19.0], [25.9, 19.0], [26.0, 19.0], [26.1, 19.0], [26.2, 20.0], [26.3, 20.0], [26.4, 20.0], [26.5, 20.0], [26.6, 20.0], [26.7, 20.0], [26.8, 20.0], [26.9, 20.0], [27.0, 20.0], [27.1, 20.0], [27.2, 20.0], [27.3, 20.0], [27.4, 20.0], [27.5, 20.0], [27.6, 20.0], [27.7, 20.0], [27.8, 20.0], [27.9, 21.0], [28.0, 21.0], [28.1, 21.0], [28.2, 21.0], [28.3, 21.0], [28.4, 21.0], [28.5, 21.0], [28.6, 21.0], [28.7, 21.0], [28.8, 21.0], [28.9, 21.0], [29.0, 21.0], [29.1, 21.0], [29.2, 21.0], [29.3, 21.0], [29.4, 21.0], [29.5, 22.0], [29.6, 22.0], [29.7, 22.0], [29.8, 22.0], [29.9, 22.0], [30.0, 22.0], [30.1, 22.0], [30.2, 22.0], [30.3, 22.0], [30.4, 22.0], [30.5, 22.0], [30.6, 22.0], [30.7, 22.0], [30.8, 22.0], [30.9, 22.0], [31.0, 22.0], [31.1, 23.0], [31.2, 23.0], [31.3, 23.0], [31.4, 23.0], [31.5, 23.0], [31.6, 23.0], [31.7, 23.0], [31.8, 23.0], [31.9, 23.0], [32.0, 23.0], [32.1, 23.0], [32.2, 23.0], [32.3, 23.0], [32.4, 24.0], [32.5, 24.0], [32.6, 24.0], [32.7, 24.0], [32.8, 24.0], [32.9, 24.0], [33.0, 24.0], [33.1, 24.0], [33.2, 24.0], [33.3, 24.0], [33.4, 24.0], [33.5, 24.0], [33.6, 24.0], [33.7, 25.0], [33.8, 25.0], [33.9, 25.0], [34.0, 25.0], [34.1, 25.0], [34.2, 25.0], [34.3, 25.0], [34.4, 25.0], [34.5, 25.0], [34.6, 25.0], [34.7, 25.0], [34.8, 25.0], [34.9, 26.0], [35.0, 26.0], [35.1, 26.0], [35.2, 26.0], [35.3, 26.0], [35.4, 26.0], [35.5, 26.0], [35.6, 26.0], [35.7, 26.0], [35.8, 26.0], [35.9, 26.0], [36.0, 27.0], [36.1, 27.0], [36.2, 27.0], [36.3, 27.0], [36.4, 27.0], [36.5, 27.0], [36.6, 27.0], [36.7, 27.0], [36.8, 27.0], [36.9, 28.0], [37.0, 28.0], [37.1, 28.0], [37.2, 28.0], [37.3, 28.0], [37.4, 28.0], [37.5, 28.0], [37.6, 29.0], [37.7, 29.0], [37.8, 29.0], [37.9, 29.0], [38.0, 29.0], [38.1, 29.0], [38.2, 30.0], [38.3, 30.0], [38.4, 30.0], [38.5, 30.0], [38.6, 30.0], [38.7, 31.0], [38.8, 31.0], [38.9, 31.0], [39.0, 31.0], [39.1, 31.0], [39.2, 32.0], [39.3, 32.0], [39.4, 32.0], [39.5, 32.0], [39.6, 33.0], [39.7, 33.0], [39.8, 33.0], [39.9, 34.0], [40.0, 34.0], [40.1, 34.0], [40.2, 35.0], [40.3, 35.0], [40.4, 36.0], [40.5, 36.0], [40.6, 37.0], [40.7, 38.0], [40.8, 39.0], [40.9, 39.0], [41.0, 41.0], [41.1, 42.0], [41.2, 43.0], [41.3, 45.0], [41.4, 46.0], [41.5, 48.0], [41.6, 50.0], [41.7, 52.0], [41.8, 54.0], [41.9, 56.0], [42.0, 58.0], [42.1, 60.0], [42.2, 61.0], [42.3, 62.0], [42.4, 64.0], [42.5, 65.0], [42.6, 66.0], [42.7, 68.0], [42.8, 69.0], [42.9, 70.0], [43.0, 71.0], [43.1, 72.0], [43.2, 74.0], [43.3, 75.0], [43.4, 76.0], [43.5, 76.0], [43.6, 78.0], [43.7, 79.0], [43.8, 79.0], [43.9, 81.0], [44.0, 81.0], [44.1, 82.0], [44.2, 83.0], [44.3, 84.0], [44.4, 85.0], [44.5, 86.0], [44.6, 86.0], [44.7, 87.0], [44.8, 88.0], [44.9, 89.0], [45.0, 89.0], [45.1, 90.0], [45.2, 91.0], [45.3, 92.0], [45.4, 92.0], [45.5, 93.0], [45.6, 94.0], [45.7, 95.0], [45.8, 95.0], [45.9, 96.0], [46.0, 97.0], [46.1, 98.0], [46.2, 98.0], [46.3, 99.0], [46.4, 100.0], [46.5, 100.0], [46.6, 101.0], [46.7, 102.0], [46.8, 102.0], [46.9, 103.0], [47.0, 104.0], [47.1, 104.0], [47.2, 105.0], [47.3, 105.0], [47.4, 105.0], [47.5, 105.0], [47.6, 106.0], [47.7, 106.0], [47.8, 106.0], [47.9, 106.0], [48.0, 106.0], [48.1, 106.0], [48.2, 106.0], [48.3, 107.0], [48.4, 107.0], [48.5, 107.0], [48.6, 107.0], [48.7, 107.0], [48.8, 107.0], [48.9, 107.0], [49.0, 107.0], [49.1, 107.0], [49.2, 107.0], [49.3, 108.0], [49.4, 108.0], [49.5, 108.0], [49.6, 108.0], [49.7, 108.0], [49.8, 108.0], [49.9, 108.0], [50.0, 108.0], [50.1, 108.0], [50.2, 108.0], [50.3, 109.0], [50.4, 109.0], [50.5, 109.0], [50.6, 109.0], [50.7, 109.0], [50.8, 109.0], [50.9, 109.0], [51.0, 109.0], [51.1, 109.0], [51.2, 109.0], [51.3, 110.0], [51.4, 110.0], [51.5, 110.0], [51.6, 110.0], [51.7, 110.0], [51.8, 110.0], [51.9, 110.0], [52.0, 110.0], [52.1, 111.0], [52.2, 111.0], [52.3, 111.0], [52.4, 111.0], [52.5, 111.0], [52.6, 111.0], [52.7, 111.0], [52.8, 111.0], [52.9, 111.0], [53.0, 111.0], [53.1, 112.0], [53.2, 112.0], [53.3, 112.0], [53.4, 112.0], [53.5, 112.0], [53.6, 112.0], [53.7, 112.0], [53.8, 112.0], [53.9, 112.0], [54.0, 113.0], [54.1, 113.0], [54.2, 113.0], [54.3, 113.0], [54.4, 113.0], [54.5, 113.0], [54.6, 113.0], [54.7, 114.0], [54.8, 114.0], [54.9, 114.0], [55.0, 114.0], [55.1, 115.0], [55.2, 115.0], [55.3, 115.0], [55.4, 115.0], [55.5, 116.0], [55.6, 116.0], [55.7, 116.0], [55.8, 117.0], [55.9, 117.0], [56.0, 117.0], [56.1, 117.0], [56.2, 118.0], [56.3, 118.0], [56.4, 118.0], [56.5, 119.0], [56.6, 119.0], [56.7, 120.0], [56.8, 120.0], [56.9, 120.0], [57.0, 121.0], [57.1, 121.0], [57.2, 122.0], [57.3, 122.0], [57.4, 122.0], [57.5, 123.0], [57.6, 123.0], [57.7, 123.0], [57.8, 124.0], [57.9, 124.0], [58.0, 125.0], [58.1, 125.0], [58.2, 126.0], [58.3, 126.0], [58.4, 127.0], [58.5, 127.0], [58.6, 128.0], [58.7, 128.0], [58.8, 129.0], [58.9, 129.0], [59.0, 130.0], [59.1, 131.0], [59.2, 131.0], [59.3, 132.0], [59.4, 132.0], [59.5, 133.0], [59.6, 134.0], [59.7, 134.0], [59.8, 135.0], [59.9, 136.0], [60.0, 136.0], [60.1, 137.0], [60.2, 138.0], [60.3, 138.0], [60.4, 139.0], [60.5, 140.0], [60.6, 140.0], [60.7, 141.0], [60.8, 141.0], [60.9, 142.0], [61.0, 143.0], [61.1, 144.0], [61.2, 144.0], [61.3, 145.0], [61.4, 146.0], [61.5, 147.0], [61.6, 148.0], [61.7, 149.0], [61.8, 150.0], [61.9, 151.0], [62.0, 152.0], [62.1, 153.0], [62.2, 154.0], [62.3, 155.0], [62.4, 156.0], [62.5, 158.0], [62.6, 159.0], [62.7, 160.0], [62.8, 161.0], [62.9, 162.0], [63.0, 163.0], [63.1, 164.0], [63.2, 165.0], [63.3, 166.0], [63.4, 166.0], [63.5, 167.0], [63.6, 168.0], [63.7, 169.0], [63.8, 170.0], [63.9, 171.0], [64.0, 172.0], [64.1, 174.0], [64.2, 175.0], [64.3, 177.0], [64.4, 178.0], [64.5, 180.0], [64.6, 181.0], [64.7, 182.0], [64.8, 184.0], [64.9, 185.0], [65.0, 187.0], [65.1, 188.0], [65.2, 189.0], [65.3, 191.0], [65.4, 193.0], [65.5, 194.0], [65.6, 195.0], [65.7, 197.0], [65.8, 198.0], [65.9, 200.0], [66.0, 200.0], [66.1, 201.0], [66.2, 203.0], [66.3, 204.0], [66.4, 206.0], [66.5, 208.0], [66.6, 209.0], [66.7, 210.0], [66.8, 211.0], [66.9, 212.0], [67.0, 213.0], [67.1, 213.0], [67.2, 213.0], [67.3, 214.0], [67.4, 214.0], [67.5, 215.0], [67.6, 215.0], [67.7, 215.0], [67.8, 216.0], [67.9, 216.0], [68.0, 216.0], [68.1, 217.0], [68.2, 217.0], [68.3, 217.0], [68.4, 217.0], [68.5, 218.0], [68.6, 218.0], [68.7, 218.0], [68.8, 218.0], [68.9, 219.0], [69.0, 219.0], [69.1, 219.0], [69.2, 219.0], [69.3, 220.0], [69.4, 220.0], [69.5, 220.0], [69.6, 221.0], [69.7, 221.0], [69.8, 221.0], [69.9, 221.0], [70.0, 222.0], [70.1, 222.0], [70.2, 222.0], [70.3, 223.0], [70.4, 223.0], [70.5, 223.0], [70.6, 223.0], [70.7, 224.0], [70.8, 224.0], [70.9, 224.0], [71.0, 225.0], [71.1, 225.0], [71.2, 226.0], [71.3, 226.0], [71.4, 226.0], [71.5, 227.0], [71.6, 227.0], [71.7, 227.0], [71.8, 228.0], [71.9, 228.0], [72.0, 229.0], [72.1, 229.0], [72.2, 229.0], [72.3, 229.0], [72.4, 230.0], [72.5, 230.0], [72.6, 230.0], [72.7, 231.0], [72.8, 231.0], [72.9, 231.0], [73.0, 231.0], [73.1, 232.0], [73.2, 232.0], [73.3, 233.0], [73.4, 233.0], [73.5, 233.0], [73.6, 234.0], [73.7, 234.0], [73.8, 235.0], [73.9, 235.0], [74.0, 235.0], [74.1, 236.0], [74.2, 236.0], [74.3, 236.0], [74.4, 237.0], [74.5, 237.0], [74.6, 238.0], [74.7, 239.0], [74.8, 239.0], [74.9, 240.0], [75.0, 241.0], [75.1, 242.0], [75.2, 242.0], [75.3, 243.0], [75.4, 244.0], [75.5, 244.0], [75.6, 245.0], [75.7, 246.0], [75.8, 247.0], [75.9, 248.0], [76.0, 249.0], [76.1, 250.0], [76.2, 250.0], [76.3, 252.0], [76.4, 253.0], [76.5, 253.0], [76.6, 254.0], [76.7, 255.0], [76.8, 256.0], [76.9, 257.0], [77.0, 258.0], [77.1, 259.0], [77.2, 260.0], [77.3, 262.0], [77.4, 263.0], [77.5, 265.0], [77.6, 266.0], [77.7, 268.0], [77.8, 269.0], [77.9, 270.0], [78.0, 271.0], [78.1, 272.0], [78.2, 273.0], [78.3, 274.0], [78.4, 275.0], [78.5, 278.0], [78.6, 280.0], [78.7, 282.0], [78.8, 284.0], [78.9, 287.0], [79.0, 290.0], [79.1, 292.0], [79.2, 294.0], [79.3, 296.0], [79.4, 298.0], [79.5, 300.0], [79.6, 302.0], [79.7, 305.0], [79.8, 306.0], [79.9, 308.0], [80.0, 310.0], [80.1, 312.0], [80.2, 314.0], [80.3, 315.0], [80.4, 318.0], [80.5, 319.0], [80.6, 321.0], [80.7, 323.0], [80.8, 325.0], [80.9, 327.0], [81.0, 330.0], [81.1, 333.0], [81.2, 335.0], [81.3, 338.0], [81.4, 340.0], [81.5, 344.0], [81.6, 346.0], [81.7, 349.0], [81.8, 352.0], [81.9, 355.0], [82.0, 358.0], [82.1, 360.0], [82.2, 363.0], [82.3, 365.0], [82.4, 367.0], [82.5, 367.0], [82.6, 370.0], [82.7, 372.0], [82.8, 375.0], [82.9, 378.0], [83.0, 380.0], [83.1, 381.0], [83.2, 382.0], [83.3, 384.0], [83.4, 386.0], [83.5, 388.0], [83.6, 390.0], [83.7, 392.0], [83.8, 394.0], [83.9, 397.0], [84.0, 400.0], [84.1, 401.0], [84.2, 403.0], [84.3, 405.0], [84.4, 408.0], [84.5, 409.0], [84.6, 411.0], [84.7, 413.0], [84.8, 416.0], [84.9, 421.0], [85.0, 424.0], [85.1, 427.0], [85.2, 431.0], [85.3, 436.0], [85.4, 441.0], [85.5, 446.0], [85.6, 452.0], [85.7, 456.0], [85.8, 461.0], [85.9, 466.0], [86.0, 472.0], [86.1, 478.0], [86.2, 485.0], [86.3, 490.0], [86.4, 496.0], [86.5, 502.0], [86.6, 507.0], [86.7, 513.0], [86.8, 517.0], [86.9, 520.0], [87.0, 523.0], [87.1, 525.0], [87.2, 526.0], [87.3, 526.0], [87.4, 527.0], [87.5, 529.0], [87.6, 531.0], [87.7, 533.0], [87.8, 537.0], [87.9, 539.0], [88.0, 541.0], [88.1, 542.0], [88.2, 543.0], [88.3, 544.0], [88.4, 545.0], [88.5, 546.0], [88.6, 547.0], [88.7, 547.0], [88.8, 549.0], [88.9, 551.0], [89.0, 553.0], [89.1, 555.0], [89.2, 556.0], [89.3, 558.0], [89.4, 558.0], [89.5, 559.0], [89.6, 561.0], [89.7, 563.0], [89.8, 566.0], [89.9, 570.0], [90.0, 574.0], [90.1, 577.0], [90.2, 581.0], [90.3, 585.0], [90.4, 587.0], [90.5, 589.0], [90.6, 593.0], [90.7, 597.0], [90.8, 602.0], [90.9, 606.0], [91.0, 610.0], [91.1, 614.0], [91.2, 618.0], [91.3, 622.0], [91.4, 626.0], [91.5, 630.0], [91.6, 634.0], [91.7, 638.0], [91.8, 643.0], [91.9, 647.0], [92.0, 651.0], [92.1, 655.0], [92.2, 659.0], [92.3, 663.0], [92.4, 667.0], [92.5, 671.0], [92.6, 676.0], [92.7, 680.0], [92.8, 684.0], [92.9, 687.0], [93.0, 691.0], [93.1, 696.0], [93.2, 700.0], [93.3, 704.0], [93.4, 709.0], [93.5, 713.0], [93.6, 717.0], [93.7, 721.0], [93.8, 726.0], [93.9, 730.0], [94.0, 733.0], [94.1, 738.0], [94.2, 742.0], [94.3, 747.0], [94.4, 751.0], [94.5, 756.0], [94.6, 760.0], [94.7, 766.0], [94.8, 771.0], [94.9, 775.0], [95.0, 779.0], [95.1, 784.0], [95.2, 791.0], [95.3, 795.0], [95.4, 796.0], [95.5, 799.0], [95.6, 802.0], [95.7, 806.0], [95.8, 810.0], [95.9, 814.0], [96.0, 820.0], [96.1, 824.0], [96.2, 829.0], [96.3, 835.0], [96.4, 841.0], [96.5, 846.0], [96.6, 852.0], [96.7, 855.0], [96.8, 856.0], [96.9, 857.0], [97.0, 859.0], [97.1, 865.0], [97.2, 871.0], [97.3, 878.0], [97.4, 887.0], [97.5, 894.0], [97.6, 901.0], [97.7, 908.0], [97.8, 915.0], [97.9, 923.0], [98.0, 930.0], [98.1, 934.0], [98.2, 939.0], [98.3, 943.0], [98.4, 946.0], [98.5, 951.0], [98.6, 960.0], [98.7, 973.0], [98.8, 987.0], [98.9, 997.0], [99.0, 1010.0], [99.1, 1020.0], [99.2, 1032.0], [99.3, 1048.0], [99.4, 1061.0], [99.5, 1076.0], [99.6, 1096.0], [99.7, 1106.0], [99.8, 1153.0], [99.9, 1187.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 14969.0, "series": [{"data": [[0.0, 14969.0], [600.0, 784.0], [700.0, 753.0], [200.0, 4385.0], [800.0, 669.0], [900.0, 432.0], [1000.0, 232.0], [1100.0, 95.0], [300.0, 1454.0], [1200.0, 20.0], [1300.0, 1.0], [1500.0, 1.0], [100.0, 6298.0], [400.0, 796.0], [1800.0, 1.0], [500.0, 1384.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 17049.0, "series": [{"data": [[0.0, 15200.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 23.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 17049.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 13.22263948497853, "minX": 1.72414206E12, "maxY": 145.85969358368774, "series": [{"data": [[1.72414212E12, 145.85969358368774], [1.72414206E12, 13.22263948497853]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72414212E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 11.723478260869546, "minX": 5.0, "maxY": 769.2500000000001, "series": [{"data": [[5.0, 11.723478260869546], [10.0, 22.614322561068143], [11.0, 19.5], [12.0, 14.0], [14.0, 13.5], [15.0, 13.0], [51.0, 87.5], [50.0, 116.35539253941025], [53.0, 75.0], [52.0, 67.0], [55.0, 66.0], [54.0, 68.0], [56.0, 54.0], [60.0, 61.25], [100.0, 237.5913664394678], [107.0, 326.8888888888889], [111.0, 339.5], [110.0, 380.0], [109.0, 381.0], [108.0, 381.0], [115.0, 381.0], [114.0, 382.0], [113.0, 381.0], [119.0, 380.0], [118.0, 379.0], [117.0, 379.0], [116.0, 380.0], [122.0, 296.0], [121.0, 387.0], [120.0, 380.0], [127.0, 260.3055555555555], [126.0, 267.7], [125.0, 317.0], [135.0, 312.0], [134.0, 280.5], [133.0, 290.6666666666667], [131.0, 294.3333333333333], [129.0, 262.0], [128.0, 315.0], [143.0, 309.5], [141.0, 311.0], [140.0, 320.0], [139.0, 320.0], [138.0, 301.75], [136.0, 247.0], [150.0, 180.0], [149.0, 287.0], [148.0, 319.5], [147.0, 317.0], [146.0, 257.2631578947368], [145.0, 311.0], [215.0, 366.0], [214.0, 367.3333333333333], [213.0, 367.0], [211.0, 367.0], [210.0, 367.0], [222.0, 193.0], [221.0, 138.0], [219.0, 229.33333333333334], [218.0, 252.8], [217.0, 316.6554054054054], [216.0, 368.0], [231.0, 173.4], [230.0, 165.66666666666669], [229.0, 121.4], [227.0, 127.0], [226.0, 167.0], [225.0, 197.33333333333334], [224.0, 363.0], [239.0, 121.25], [238.0, 14.0], [237.0, 42.50000000000001], [236.0, 27.0], [235.0, 84.0], [234.0, 46.5], [233.0, 105.5], [247.0, 500.5], [246.0, 470.0], [245.0, 482.6], [244.0, 362.0], [243.0, 364.75], [241.0, 361.0], [240.0, 220.5], [250.0, 583.2332892124433], [249.0, 525.5], [248.0, 518.75], [285.0, 396.0], [284.0, 397.0], [283.0, 769.2500000000001], [291.0, 751.5], [301.0, 572.0], [302.0, 531.0], [300.0, 577.0], [290.0, 661.0], [289.0, 535.0], [288.0, 467.1], [297.0, 573.0], [296.0, 543.0], [295.0, 540.3333333333334], [294.0, 686.0], [293.0, 724.0], [292.0, 744.0], [319.0, 523.0], [317.0, 737.5], [306.0, 575.5], [304.0, 594.0], [315.0, 631.6666666666667], [314.0, 662.0], [313.0, 673.0], [312.0, 527.0], [311.0, 648.0], [310.0, 606.3333333333334], [309.0, 636.0], [308.0, 578.0], [335.0, 609.6666666666666], [333.0, 656.0], [332.0, 568.0], [331.0, 676.0], [330.0, 653.5], [327.0, 542.0], [325.0, 523.5], [322.0, 523.5], [344.0, 625.0], [348.0, 361.0], [347.0, 506.0], [346.0, 681.0], [345.0, 748.0], [343.0, 572.0], [342.0, 451.0000000000002], [339.0, 573.0], [338.0, 616.0], [337.0, 626.0], [336.0, 598.8333333333333]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[84.57550969820926, 193.77031046662896]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 348.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1022.4666666666667, "minX": 1.72414206E12, "maxY": 693459.5, "series": [{"data": [[1.72414212E12, 693459.5], [1.72414206E12, 46972.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72414212E12, 1022.4666666666667], [1.72414206E12, 48712.53333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72414212E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 31.46016630901281, "minX": 1.72414206E12, "maxY": 333.1764197673072, "series": [{"data": [[1.72414212E12, 333.1764197673072], [1.72414206E12, 31.46016630901281]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72414212E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2.745997004953345, "minX": 1.72414206E12, "maxY": 31.358100858369088, "series": [{"data": [[1.72414212E12, 2.745997004953345], [1.72414206E12, 31.358100858369088]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72414212E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.6111856223175935, "minX": 1.72414206E12, "maxY": 329.51768229466495, "series": [{"data": [[1.72414212E12, 329.51768229466495], [1.72414206E12, 0.6111856223175935]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72414212E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.72414206E12, "maxY": 1876.0, "series": [{"data": [[1.72414212E12, 1876.0], [1.72414206E12, 306.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72414212E12, 374.0000000000001], [1.72414206E12, 97.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72414212E12, 1324.6200000000017], [1.72414206E12, 181.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72414212E12, 1070.3], [1.72414206E12, 131.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72414212E12, 51.0], [1.72414206E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72414212E12, 121.0], [1.72414206E12, 18.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72414212E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 10.0, "minX": 217.0, "maxY": 1097.0, "series": [{"data": [[520.0, 920.0], [515.0, 1077.5], [346.0, 14.0], [359.0, 13.0], [356.0, 277.0], [383.0, 13.0], [382.0, 121.5], [387.0, 13.0], [396.0, 12.0], [398.0, 24.0], [389.0, 125.0], [397.0, 443.0], [393.0, 1097.0], [404.0, 12.0], [402.0, 122.0], [403.0, 121.0], [410.0, 237.0], [401.0, 427.0], [428.0, 11.0], [430.0, 22.0], [431.0, 23.0], [418.0, 106.0], [423.0, 435.0], [419.0, 144.0], [433.0, 11.0], [441.0, 19.0], [440.0, 22.0], [434.0, 22.0], [445.0, 22.0], [435.0, 22.0], [442.0, 22.0], [443.0, 227.0], [448.0, 15.0], [460.0, 10.0], [456.0, 11.0], [452.0, 21.0], [461.0, 21.0], [457.0, 21.0], [455.0, 226.0], [458.0, 266.0], [469.0, 10.0], [480.0, 10.0], [498.0, 684.0], [507.0, 1034.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[520.0, 538.0], [515.0, 578.0], [217.0, 797.0], [257.0, 366.0], [351.0, 524.0], [356.0, 512.5], [361.0, 231.0], [379.0, 251.0], [378.0, 588.0], [397.0, 232.0], [393.0, 652.0], [387.0, 543.0], [410.0, 116.0], [401.0, 226.0], [425.0, 118.0], [419.0, 166.0], [423.0, 255.5], [417.0, 219.0], [429.0, 258.0], [421.0, 565.0], [441.0, 113.0], [443.0, 111.0], [442.0, 231.0], [446.0, 222.5], [438.0, 248.0], [455.0, 109.0], [456.0, 124.0], [458.0, 109.0], [449.0, 217.0], [453.0, 216.0], [460.0, 522.5], [464.0, 110.0], [480.0, 229.0], [489.0, 655.0], [498.0, 581.0], [507.0, 610.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 520.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 217.0, "maxY": 560.0, "series": [{"data": [[520.0, 545.0], [515.0, 538.5], [346.0, 14.0], [359.0, 13.0], [356.0, 61.5], [383.0, 13.0], [382.0, 121.5], [387.0, 12.5], [396.0, 12.0], [398.0, 24.0], [389.0, 125.0], [397.0, 221.0], [393.0, 560.0], [404.0, 11.0], [402.0, 122.0], [403.0, 121.0], [410.0, 114.0], [401.0, 217.5], [428.0, 11.0], [430.0, 22.0], [431.0, 23.0], [418.0, 106.0], [423.0, 214.0], [419.0, 132.0], [433.0, 11.0], [441.0, 19.0], [440.0, 22.0], [434.0, 22.0], [445.0, 21.0], [435.0, 22.0], [442.0, 22.0], [443.0, 118.0], [448.0, 15.0], [460.0, 10.0], [456.0, 11.0], [452.0, 21.0], [461.0, 21.0], [457.0, 21.0], [455.0, 125.0], [458.0, 167.5], [469.0, 10.0], [480.0, 10.0], [498.0, 471.0], [507.0, 502.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[520.0, 0.0], [515.0, 0.0], [217.0, 0.0], [257.0, 0.0], [351.0, 0.0], [356.0, 0.0], [361.0, 0.0], [379.0, 0.0], [378.0, 0.0], [397.0, 0.0], [393.0, 0.0], [387.0, 0.0], [410.0, 0.0], [401.0, 0.0], [425.0, 0.0], [419.0, 0.0], [423.0, 0.0], [417.0, 0.0], [429.0, 0.0], [421.0, 0.0], [441.0, 0.0], [443.0, 0.0], [442.0, 0.0], [446.0, 0.0], [438.0, 0.0], [455.0, 0.0], [456.0, 0.0], [458.0, 0.0], [449.0, 0.0], [453.0, 0.0], [460.0, 0.0], [464.0, 0.0], [480.0, 0.0], [489.0, 0.0], [498.0, 0.0], [507.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 520.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 249.36666666666667, "minX": 1.72414206E12, "maxY": 288.53333333333336, "series": [{"data": [[1.72414212E12, 288.53333333333336], [1.72414206E12, 249.36666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72414212E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.216666666666667, "minX": 1.72414206E12, "maxY": 284.15, "series": [{"data": [[1.72414212E12, 5.216666666666667], [1.72414206E12, 248.53333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.72414212E12, 284.15]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72414212E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.216666666666667, "minX": 1.72414206E12, "maxY": 284.15, "series": [{"data": [[1.72414212E12, 5.216666666666667], [1.72414206E12, 248.53333333333333]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}, {"data": [[1.72414212E12, 284.15]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72414212E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.216666666666667, "minX": 1.72414206E12, "maxY": 284.15, "series": [{"data": [[1.72414212E12, 5.216666666666667], [1.72414206E12, 248.53333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.72414212E12, 284.15]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72414212E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

