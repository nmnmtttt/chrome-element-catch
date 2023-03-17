import helper from "crx-henetlper";
const Content = new helper.Content();

class LocatorInstance {
  locatorBox: HTMLElement | undefined;

  constructor() {
    // ui 的静态定位资源 -方便后续处理
    fetch(chrome.runtime.getURL("static/locatorBox.html")).then(async (res) => {
      const content = await res.text();

      this.locatorBox = (await Content.addWebComponent({
        jsContent: content,
      })) as any as HTMLElement;

      this.locatorBox.innerHTML = "测试修改1";
    });
  }
}

export const locatorInstance = new LocatorInstance();
