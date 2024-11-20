// import {  Context } from 'hono';

export const calculate = async(c) => {
    try {
        const { people, discount, deliveryFee} = await c.req.json();

        let finalBayronon = {}
        let total = 0;
        let numOfPeople = 0

        for(let person in people){
            total+=people[person]
            numOfPeople++
        }

        const discountedPercentage = discount/total;
        const delivery = deliveryFee/numOfPeople;

        for(let person in people){
            finalBayronon[person]= (people[person] * (1 - discountedPercentage)) + delivery
        }
       
        return c.json(finalBayronon)

    } catch (error) {
      return c.json({ error: error instanceof Error ? error.message : 'An error occurred' }, 500);
    }
}