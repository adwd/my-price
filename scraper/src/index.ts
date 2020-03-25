// import playwright from "playwright";
import playwright from "playwright";

async function main() {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://whatsmyuseragent.org/");
  console.log(await page.content());
  await browser.close();
}

main();
