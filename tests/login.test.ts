import { test, expect } from './testWithFixtures'

test.describe('Login Test', () => {
    test('Verify if user is able to login with invalid credentials', async ({page, ai}) => {
        await page.goto('/')
        const text = await ai('Get the first accepted username')
        await ai(`Enter the text ${text} in username field`)
        await ai('Enter a random text in password field')
        await ai('Click the login button')
        const flag = await ai('Is the error message displayed?');
        console.log(flag)
        expect(flag).toBe(true)
    })

})