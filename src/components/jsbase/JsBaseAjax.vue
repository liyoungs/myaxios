<template>
  <div style="padding-bottom:30px">
    <h1 style="text-algin:center;">AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。</h1>
    <el-tag>
      AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。 AJAX
      不需要任何浏览器插件，但需要用户允许JavaScript在浏览器上执行。
    </el-tag>
    <el-card>
      <el-button slot="header" @click="ajaxInfo">Ajax</el-button>
      <el-button v-for="item in ajax_info" :key="item.id" type="primary" round>{{ item.name }}</el-button>
    </el-card>
    <div style="height:36px"></div>
    <el-tabs tabPosition="left">
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i>
          XMLHttpRequest 对象
        </span>
        所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。
        <div style="height:6px"></div>
        <el-alert
          :closable="false"
          title="所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。"
        ></el-alert>
        <div style="height:6px"></div>
        <el-tag type="success">var xmlhttp = new XMLHttpRequest();</el-tag>
        <div style="height:6px"></div>
        <el-alert
          :closable="false"
          title="老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象："
        ></el-alert>
        <div style="height:6px"></div>
        <el-tag type="success">var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");</el-tag>
        <div style="height:6px"></div>
        <el-alert
          :closable="false"
          effect="dark"
          type="error"
          title="为了应对所有的现代浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。如果支持，创建 XMLHttpRequest 对象，否则创建 ActiveXObject ："
        ></el-alert>
        <div style="height:6px"></div>
        <el-tag type="danger" style="height:auto">
          var xmlhttp;
          <br />
          if (window.XMLHttpRequest) {
          <br />
          // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
          <br />
          xmlhttp=new XMLHttpRequest();
          <br />
          } else {
          <br />
          // IE6, IE5 浏览器执行代码
          <br />
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          <br />
          }
        </el-tag>
      </el-tab-pane>

      <el-tab-pane label="XMLHttpRequest 请求。">
        如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
        <div style="height:6px"></div>
        <el-tag type="danger" style="height:auto">
          xmlhttp.open("GET","ajax_info.txt",true);
          <br />
          xmlhttp.send();
        </el-tag>
        <div style="height:6px"></div>
        <el-table :data="tableData" border stripe>
          <el-table-column prop="method" label="方法" width="240"></el-table-column>
          <el-table-column prop="describe" label="描述">
            <template slot-scope="scope">
              {{ scope.row.describe.title }}
              <ul>
                <li v-for="(item, index) in scope.row.describe.desc" :key="index">{{ item }}</li>
              </ul>
            </template>
          </el-table-column>
        </el-table>
        在 open 和 send 之间使用 setRequestHeader
        <br />
        <el-tag type="danger" style="height:auto">
          xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        </el-tag>
        <h2>GET 还是 POST？</h2>
        与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。
        <br />
        然而，在以下情况中，请使用 POST 请求：
        <ul>
          <li>无法使用缓存文件（更新服务器上的文件或数据库）</li>
          <li>向服务器发送大量数据（POST 没有数据量限制）</li>
          <li>发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="XHR 响应">
        需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。
        <div style="height:6px"></div>
        <el-table :data="responseData" border stripe>
          <el-table-column prop="method" label="属性" width="240"></el-table-column>
          <el-table-column prop="describe" label="描述"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="XHR readyState">
        当请求被发送到服务器时，我们需要执行一些基于响应的任务。
        <br />
        每当 readyState 改变时，就会触发 onreadystatechange 事件。
        <br />
        readyState 属性存有 XMLHttpRequest 的状态信息。
        <br />
        下面是 XMLHttpRequest 对象的三个重要的属性：
        <div style="height:6px"></div>
        <el-table :data="readyStateData" border stripe>
          <el-table-column prop="method" label="属性" width="240"></el-table-column>
          <el-table-column prop="describe" label="描述">
            <template slot-scope="scope">
              <div v-html="scope.row.describe.title"></div>
              <template v-if="scope.row.describe.desc">
                <ul>
                  <li v-for="(item, index) in scope.row.describe.desc" :key="index">{{ item }}</li>
                </ul>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "JsBaseAjax",
  data() {
    return {
      ajax_info: null,
      demo_get: null,
      tableData: [
        {
          method: "open(method,url,async)",
          describe: {
            title: "规定请求的类型、URL 以及是否异步处理请求。",
            desc: [
              "method：请求的类型；GET 或 POST",
              "url：文件在服务器上的位置",
              "async：true（异步）或 false（同步）"
            ]
          }
        },
        {
          method: "send(string)",
          describe: {
            title: "将请求发送到服务器。",
            desc: ["string：仅用于 POST 请求）"]
          }
        },
        {
          method: "setRequestHeader(header,value)",
          describe: {
            title: "向请求添加 HTTP 头。",
            desc: ["header: 规定头的名称", "value: 规定头的值"]
          }
        }
      ],
      responseData: [
        {
          method: "responseText",
          describe: "获得字符串形式的响应数据。"
        },
        {
          method: "responseXML",
          describe: "获得 XML 形式的响应数据。"
        }
      ],
      readyStateData: [
        {
          method: "onreadystatechange",
          describe: {
            title: "存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。",
            desc: null
          }
        },
        {
          method: "readyState",
          describe: {
            title: "存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。",
            desc: [
              "0: 请求未初始化",
              "1: 服务器连接已建立",
              "2: 请求已接收",
              "3: 请求处理中",
              "4: 请求已完成，且响应已就绪"
            ]
          }
        },
        {
          method: "status",
          describe: {
            title: '200: "OK"<br />404: 未找到页面',
            desc: null
          }
        }
      ]
    };
  },
  methods: {
    ajaxInfo() {
      if (this.$store.state.todayVideo) {
        this.ajax_info = this.$store.state.todayVideo;
      } else {
        const XMLHTTP = new XMLHttpRequest();
        XMLHTTP.onreadystatechange = () => {
          if (XMLHTTP.readyState === 4 && XMLHTTP.status === 200) {
            // const res = XMLHTTP.responseText;
            const res = JSON.parse(XMLHTTP.responseText);
            if (res.code === 200) {
              this.ajax_info = res.result;
              this.$store.commit("setTodayVideo", res.result);
            } else {
              this.ajax_info = "没有数据";
            }
          } else {
            this.ajax_info = "请求错误";
          }
        };
        // i.tianqi.com/index.php?c=code&id=12&icon=1&num=5&site=12
        XMLHTTP.open("get", "https://api.apiopen.top/videoHomeTab", true);
        XMLHTTP.send();
      }
    }
  },
  created() {},
  mounted() {
    console.log("mounted");
    // this.ajaxGet();
    // console.log(this.demo_get);
  }
};
</script>
