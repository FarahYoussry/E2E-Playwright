import { test, expect } from '@playwright/test';
test('restful api', async ({ request }) => {
   const response = await request.post( 'https://api.restful-api.dev/objects',{
    data: {
      name: "Apple MacBook Pro 30",
      data: {
        year: 2025,
        price: 1999,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    }
  });
 const responseBody = await response.json();
 await expect(response).toBeOK();
 const modelId = responseBody.id;
 const response1 = await request.get(`https://api.restful-api.dev/objects/${modelId}`);
 const responseBody1 = await response1.json();
 await expect(response1).toBeOK();
 expect(responseBody1).toEqual({
  id: modelId,
  "name": "Apple MacBook Pro 30",
  "data": {
    "year": 2025,
    "price": 1999,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
}
})
 const response2 = await request.patch( `https://api.restful-api.dev/objects/${modelId}`,{
      data: {
      name: "Apple MacBook Pro 30 (Updated Name)"
    }
  });
  const responseBody2 = await response2.json();
 await expect(response2).toBeOK();
 expect(responseBody2).toMatchObject({
  id: modelId,
  "name": "Apple MacBook Pro 30 (Updated Name)",
  "data": {
    "year": 2025,
    "price": 1999,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
}
})
const response3 = await request.put( `https://api.restful-api.dev/objects/${modelId}`,{
      data: {
      name: "Apple MacBook Pro 30",
      data: {
      "year": 2025,
      "price": 1999,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      "color": "silver"
   }
    }
  });
  const responseBody3 = await response3.json();
  await expect(response3).toBeOK();
  expect(responseBody3).toMatchObject({
  id: modelId,
   "name": "Apple MacBook Pro 30",
   "data": {
      "year": 2025,
      "price": 1999,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      "color": "silver"
}
})
const response4 = await request.delete(`https://api.restful-api.dev/objects/${modelId}`);
 const responseBody4 = await response4.json();
 await expect(response4).toBeOK();
 expect(responseBody4).toEqual({
  message: `Object with id = ${modelId} has been deleted.`
})
});
