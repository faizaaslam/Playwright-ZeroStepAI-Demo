import { test, expect } from './testWithFixtures'

test.describe('Shopping Cart Tests', () => {
    test('Verify user is able to add item to cart', async ({page, ai}) => {
        await page.goto('/')
        const [username,password] = await ai(['Get the first accepted username',
            'Get the accepted password'])
        await ai(`Enter the username ${username} in username field`)
        await ai(`Enter the password ${password} in password field`)
        await ai('Click the login button')
        const flag = await ai('Is the "Products" heading is displayed?')
        expect(flag).toBe(true);
        await ai('Scroll to the bottom of the page')
        await ai('Scroll to the top of the page')
        const price = await ai('Get the price of the first item')
        await ai(`Click on Add to cart button to add first item to cart`)
        await page.locator('#shopping_cart_container').click()
        const cartItemPrice = await ai('Get the price of item in the cart')
        expect(price).toEqual(cartItemPrice)
    })

})