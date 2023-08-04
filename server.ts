// server.ts controls the flow of data for calendar api endpoints

const express = require('express');

module.exports.init = function () {
    const app = express();

 /**
 * @api {get} /et-calendar Get cps calendars
 * @apiPermission None
 * @apiDescription Get calendar from CPS API and rename ColorCode property key
 * @apiName GetCalendar
 * @apiGroup None
 * @apiVersion 1.0.0
 *
 * @apiExample {curl} CURL Example:
 *    curl http://localhost:3000/get-calendar
 *
 */
    app.get('/get-calendar', async(req, res) => {
        try {
            const resp = await fetch('https://api.cps.edu/Calendar/cps/calendarslist');
            const respJson = await resp.json();

            respJson.map((item, index) => {
                respJson[index]['RGBColorHash'] = item.ColorCode;
                delete respJson[index].ColorCode;
                return respJson[index];
            });

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.send(respJson);
        } catch (err) {
            console.log(err);
            res
                .status(500)
                .send('Something went wrong');
        }
    });

    return app;
}