import { $, ssh } from "zx";
import { ProcessOutput } from "zx/core";
void (async function () {
    // const data: ProcessOutput = await $`cat package.json | grep name`
    // console.log(data.stdout)
    const $ = ssh("abc3660170@192.168.2.99", {
        port: 22,
        options: ['StrictHostKeyChecking=no']
    })
    await $`at package.json | grep name`
})();
