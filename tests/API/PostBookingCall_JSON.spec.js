import { test, expect } from 'playwright/test'
import { readFile } from 'fs/promises';;
import * as path from 'path';


test("Create New booking with Post Method", async function ({ request }) {
    const dataPath = path.join(__dirname, '../TestData/booking.json');

    // Read the file asynchronously
    const file = await readFile(dataPath, 'utf-8');
    const bookingData = JSON.parse(file);

    const url = 'https://restful-booker.herokuapp.com/booking';


    const response = await request.post(url, {
        data: bookingData,    // <-- use data, NOT body
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // Check the response status (201 Created expected)
    expect(response.status()).toBe(200);  // Normally, REST APIs will return 200 or 201 for successful creation

    // Parse the response JSON body
    const responseBody = await response.json();
    console.log('Booking Created:', responseBody);  // Log the response

    // Assert that the response contains the booking ID (which is usually returned after creation)
    expect(responseBody.booking.firstname).toBe(bookingData.firstname);
    expect(responseBody.booking.lastname).toBe(bookingData.lastname);
    expect(responseBody.booking.totalprice).toBe(bookingData.totalprice);
    expect(responseBody.booking.depositpaid).toBe(bookingData.depositpaid);
    expect(responseBody.booking.bookingdates.checkin).toBe(bookingData.bookingdates.checkin);
    expect(responseBody.booking.bookingdates.checkout).toBe(bookingData.bookingdates.checkout);
    expect(responseBody.booking.additionalneeds).toBe(bookingData.additionalneeds);
});

