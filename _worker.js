

// 部署完成后在网址后面加上这个，获取订阅器默认节点，/auto

let mytoken= 'auto';//快速订阅访问入口, 留空则不启动快速订阅

// 设置优选地址，不带端口号默认443，不支持非TLS订阅生成
let addresses = [
	'cloudflare.cfgo.cc:2053#官方优选',
	'skk.moe:443#官方优选',
	'icook.hk:8443#官方优选',
	'icook.tw:2053#官方优选',
	'cf.090227.xyz:2087#官方优选-CM提供',
	'cfip.xocooooa.tk:8443#官方优选-OTC提供',
	'185.221.160.203:443#电信优选IP',
	'cip.951535.xyz#CF官方IP域名',
	'acjp2.cloudflarest.link#联通高速优选域名',
	'acsg.cloudflarest.link#联通高速优选域名',
	'acsg3.cloudflarest.link#联通高速优选域名',
	'acjp2.cloudflarest.link#移动高速优选域名',
	'acsg3.cloudflarest.link#移动高速优选域名',
	'acsg3.cloudflarest.link#电信高速优选域名',
	'acsg.cloudflarest.link#电信高速优选域名',
	'www.visa.co.jp',
	'www.udacity.com',
	'japan.com',
	'www.boba88slot.com',
	'www.gov.se',
	'www.gov.ua',
	'edtunnel-dgp.pages.dev',
	'www.ipget.net',
	'www.visa.com.tw',
	'singapore.com',
	'www.ipchicken.com',
	'time.is',
	'www.visa.com',
	'download.yunzhongzhuan.com',
	'skk.moe',
	'ip.sb',
	'www.wto.org',
	'www.hugedomains.com',
	'www.visakorea.com',
	'russia.com',
	'alejandracaiccedo.com',
	'www.ipaddress.my',
	'www.iplocation.net',
	'www.visa.com.sg',
	'www.whoer.net',
	'www.visa.com.hk',
	'log.bpminecraft.com',
	'whatismyipaddress.com',
	'fbi.gov',
	'malaysia.com',
	'iplocation.io',
	'www.glassdoor.com',
	'www.whatismyip.com',
	'www.gco.gov.qa',
	'www.pcmag.com',
	'icook.tw',
	'www.udemy.com',
	'www.iakeys.com',
	'www.zsu.gov.ua',
	'www.4chan.org',
	'www.csgo.com',
	'time.cloudflare.com',
	'www.who.int',
	'www.shopify.com',
	'www.yecaoyun.com',
	'www.iios.club',
	'hk.zh141.com',
	'tw.zh141.com',
	'tw.zh141.com',
	'www.haijiao.com',
	'www.705ee.com',
	'www.108kav.com',
	'3213456.com:8080',
	'bo1014.com:8080',
	'193ge.com:8080',
	'ecnw58.b4gnun4bmv8qcwx4mbi.top:8080',
	'g264.cc:8080',
	'lao304.com:8080',
	'6xrby74.tjfnfzkbii3c1tliyuwo.top:8080',
	'cf-1.autocdnip.top:8080',
	'332ke.com:8080',
	'a396.cc:8080',
	'a394.cc:8080',
	'187ge.com:8080',
	'j266.cc:8080',
	'247ju.com:8080',
	'181ge.com:8080',
	't437.cc:8080',
	'v186.cc:8080',
	't141.cc:8080',
	't146.cc:8080',
	'sp.rweek.top:8080',
	'248ju.com:8080',
	'g435.cc:8080',
	't148.cc:8080',
	'ke166.cc:8080',
	'ta223.com:8080',
	'd241.cc:8080',
	'tv4643.com:8080',
	'3jrb2u1sf7.scr9893jrb2u1sf7jipu.top:8080',
	'a397.cc:8080',
	'lao317.com:8080',
	'bo1011.com:8080',
	'lao310.com:8080',
	'a391.cc:8080',
	'187ge.com:8080',
	'bo1013.com:8080',
	'cdntest.yuchen.icu:8080',
	'g264.cc:8080',
	'lao304.com:8080',
	'6xrby74.tjfnfzkbii3c1tliyuwo.top:8080',
	'cf-1.autocdnip.top:8080',
	'a393.cc:8080',
	'v215.cc:8080',
	'ke163.cc:8080',
	'ke191.cc:8080',
	'3jrb2u1sf7.scr9893jrb2u1sf7jipu.top:8080',
	'lao317.com:8080',
	'w372.cc:8080',
	'g437.cc:8080',
	'g433.cc:8080',
	'b312.cc:8080',
	'321126.com:8080',
	'1165vip.com:8080',
	'd414.cc:8080',
	'b378.cc:8080',
	'd410.cc:8080',
	'xfltd.net:8080',
	//'cdn.jsbang.top#电信联通',
	//'cdn.didi8.com#电信联通',
	//'opop.200307.xyz#电信联通',
	//'cn.king361.link#电信联通',
	//'go.mesad.1145114.me#电信联通',
	//'80.cf.bestl.de#电信联通',
	//'443.cf.bestl.de#电信联通',
	//'cfa.xiaoxing.link#电信联通',
	//'ff.yydsb.link#电信联通',
	//'80.cf.bestl.de#移动',
	//'443.cf.bestl.de#移动',
	//'cfip.gay#移动',
	//'go.mesad.1145114.me#移动',
	//'icook.hk',
	//'ip.sb',
	//'japan.com',
	//'skk.moe',
	//'www.visa.com',
	//'www.visa.co.jp',
	//'www.visakorea.com',
	//'www.gco.gov.qa',
	//'www.csgo.com',
	//'www.whatismyip.com',
	//'gamer.com.tw',
	//'steamdb.info',
	//'toy-people.com',
	//'silkbook.com',
	//'cdn.anycast.eu.org',
	//'icook.hk',
	//'shopify.com',
	//'www.visa.com.tw',
	//'time.is',
	//'japan.com',
	//'www.hugedomains.com',
	//'www.visa.com.sg',
	//'www.whoer.net',
	//'www.visa.com.hk',
	//'malaysia.com',
	//'www.visa.co.jp',
	//'www.ipget.net',
	//'icook.tw',
	//'www.visa.com',
	//'www.gov.ua',
	//'www.udacity.com',
	//'www.shopify.com',
	//'www.whatismyip.com',
	//'singapore.com',
	//'www.visakorea.com',
	//'www.csgo.com',
	//'russia.com',
	//'ip.sb',
	//'www.4chan.org',
	//'www.glassdoor.com',
	//'xn--b6gac.eu.org',
	//'www.digitalocean.com',
	//'www.udemy.com',
	//'cdn-all.xn--b6gac.eu.org',
	//'dnschecker.org',
	//'tasteatlas.com',
	//'pixiv.net',
	//'comicabc.com',
	//'icook.tw',
	//'gamer.com.tw',
	//'steamdb.info',
	//'toy-people.com',
	//'silkbook.com',
];

// 设置优选地址api接口
let addressesapi = [
	//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesapi.txt' //可参考内容格式 自行搭建。
        //'https://raw.githubusercontent.com/wowdd1/Worker-Vless-2-USB/main/addressesapi.txt'
	'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesapi.txt',
	//'https://raw.githubusercontent.com/Onezyh/Worker-Vless-2-USB/main/addressesapi.txt',
	'https://addressesapi.090227.xyz/CloudFlareYes',
	'https://addressesapi.090227.xyz/ct',
	'https://addressesapi.090227.xyz/cmcc',
	'https://ipdb.api.030101.xyz/?type=bestcf',
	'https://810828db.cf-workers-text2kv-6j5.pages.dev/result.txt?token=TEXT2KV',
	'https://810828db.cf-workers-text2kv-6j5.pages.dev/result_baipiao.txt?token=TEXT2KV',
	'https://cloudflare.vmshop.org/ipv4.php'
];

let DLS = 10;//速度下限
let addressescsv = [
	//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressescsv.csv' //iptest测速结果文件。 https://t.me/bestcfipas
        //'https://raw.githubusercontent.com/wowdd1/Worker-Vless-2-USB/main/addressescsv.csv'
];

let subconverter = "api.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"; //订阅配置文件

let link = '';
let edgetunnel = 'ed';
let RproxyIP = 'false';
let proxyIPs = [
	'proxyip.aliyun.fxxk.dedyn.io',
	'proxyip.multacom.fxxk.dedyn.io',
	'proxyip.vultr.fxxk.dedyn.io',
	'proxyip.fxxk.dedyn.io',
	'proxyip.sg.fxxk.dedyn.io',
	'proxyip.jp.fxxk.dedyn.io',
	'proxyip.hk.fxxk.dedyn.io',
	'proxyip.oracle.fxxk.dedyn.io',
	'proxyip.digitalocean.fxxk.dedyn.io',
	'workers.bestip.one',
	'www.hongxing.com',
	'www.aaa123.com',
	'www.miya.cn',
	'www.aa666.com',
	'www.kuaimao.com',
	'kuaimao.com',
	'578.com',
	'0606.com',
	'www.578.com',
	'www.langyou.com',
	'www.999www.com',
	'999www.com',
	'www.xiaojiejie.com',
	'www.8h8h.com',
	'www.xx85.com',
	'www.xx96.com',
	'www.yy47.com',
	'www.777yyy.com',
	'www.88mao.com',
	'91vip.com',
	'www.yy51.com',
	'xx96.com',
	'www.ww500.com',
	'aa666.com',
	'www.867.cc',
	'yy6030.com',
	'www.fuli77.com',
	'xxxx6.com',
	'hjsq.com',
	'www.87m.com',
	'www.7777cc.com',
	'www.601tv.com',
	'www.777ttt.com',
	'www.my123.com',
	'www.uu77.com',
	'www.59cc.com',
	'zz77.com',
	'www.888xxx.com',
	'www.4444h.com',
	'www.456tv.com',
	'www.51papa.com',
	'601tv.com',
	'www.77ig.com',
	'cdn.anycast.eu.org',
	'cdn.xn--b6gac.eu.org',
	'cdn-all.xn--b6gac.eu.org',
	'edgetunnel.anycast.eu.org',
	'cdn-b100.xn--b6gac.eu.org',
];
let CMproxyIPs = [
	{ proxyIP: "proxyip.fxxk.dedyn.io", type: "HK" },
];
let BotToken ='';
let ChatID =''; 
let proxyhosts = [//本地代理域名池
	//'ppfv2tl9veojd-maillazy.pages.dev',
];
let proxyhostsURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts';//在线代理域名池URL
let EndPS = '';//节点名备注内容

let FileName = 'WorkerVless2sub';
let SUBUpdateTime = 6; 
let total = 99;//PB
//let timestamp = now;
let timestamp = 4102329600000;//2099-12-31

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

async function getAddressesapi() {
	if (!addressesapi || addressesapi.length === 0) {
		return [];
	}
	
	let newAddressesapi = [];
	
	for (const apiUrl of addressesapi) {
		try {
			const response = await fetch(apiUrl);
		
			if (!response.ok) {
				console.error('获取地址时出错:', response.status, response.statusText);
				continue;
			}
		
			const text = await response.text();
			let lines;
			if (text.includes('\r\n')){
				lines = text.split('\r\n');
			} else {
				lines = text.split('\n');
			}
			const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(:\d+)?(#.*)?$/;
		
			const apiAddresses = lines.map(line => {
				const match = line.match(regex);
				return match ? match[0] : null;
			}).filter(Boolean);
		
			newAddressesapi = newAddressesapi.concat(apiAddresses);
		} catch (error) {
			console.error('获取地址时出错:', error);
			continue;
		}
	}
	
	return newAddressesapi;
}

async function getAddressescsv() {
	if (!addressescsv || addressescsv.length === 0) {
		return [];
	}
	
	let newAddressescsv = [];
	
	for (const csvUrl of addressescsv) {
		try {
			const response = await fetch(csvUrl);
		
			if (!response.ok) {
				console.error('获取CSV地址时出错:', response.status, response.statusText);
				continue;
			}
		
			const text = await response.text();// 使用正确的字符编码解析文本内容
			let lines;
			if (text.includes('\r\n')){
				lines = text.split('\r\n');
			} else {
				lines = text.split('\n');
			}
		
			// 检查CSV头部是否包含必需字段
			const header = lines[0].split(',');
			const tlsIndex = header.indexOf('TLS');
			const speedIndex = header.length - 1; // 最后一个字段
		
			const ipAddressIndex = 0;// IP地址在 CSV 头部的位置
			const portIndex = 1;// 端口在 CSV 头部的位置
			const dataCenterIndex = tlsIndex + 1; // 数据中心是 TLS 的后一个字段
		
			if (tlsIndex === -1) {
				console.error('CSV文件缺少必需的字段');
				continue;
			}
		
			// 从第二行开始遍历CSV行
			for (let i = 1; i < lines.length; i++) {
				const columns = lines[i].split(',');
		
				// 检查TLS是否为"TRUE"且速度大于DLS
				if (columns[tlsIndex].toUpperCase() === 'TRUE' && parseFloat(columns[speedIndex]) > DLS) {
					const ipAddress = columns[ipAddressIndex];
					const port = columns[portIndex];
					const dataCenter = columns[dataCenterIndex];
			
					const formattedAddress = `${ipAddress}:${port}#${dataCenter}`;
					newAddressescsv.push(formattedAddress);
				}
			}
		} catch (error) {
			console.error('获取CSV地址时出错:', error);
			continue;
		}
	}
	
	return newAddressescsv;
}

let protocol;
export default {
	async fetch (request, env) {
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const format = url.searchParams.get('format') ? url.searchParams.get('format').toLowerCase() : "null";
		let host = "";
		let uuid = "";
		let path = "";
		let UD = Math.floor(((timestamp - Date.now())/timestamp * 99 * 1099511627776 * 1024)/2);
		total = total * 1099511627776 * 1024;
		let expire= Math.floor(timestamp / 1000) ;

		if (mytoken !== '' && url.pathname.includes(mytoken)) {
			host = env.HOST || "edgetunnel-2z2.pages.dev";
			uuid = env.UUID || "30e9c5c8-ed28-4cd9-b008-dc67277f8b02";
			path = env.PATH || "/?ed=2048";
			edgetunnel = env.ED || edgetunnel;
			RproxyIP = env.RPROXYIP || RproxyIP;

			const hasSos = url.searchParams.has('sos');
			if (hasSos) {
				const hy2Url = "https://hy2sub.pages.dev";
				try {
					const subconverterResponse = await fetch(hy2Url);
	
					if (!subconverterResponse.ok) {
						throw new Error(`Error fetching lzUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
					}
	
					const base64Text = await subconverterResponse.text();
					link = atob(base64Text); // 进行 Base64 解码
	
				} catch (error) {
					// 错误处理
				}	
			}
		await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		} else {
			host = url.searchParams.get('host');
			uuid = url.searchParams.get('uuid');
			path = url.searchParams.get('path');
			edgetunnel = url.searchParams.get('edgetunnel') || edgetunnel;
			RproxyIP = url.searchParams.get('proxyip') || RproxyIP;
			
			if (!url.pathname.includes("/sub")) {
				const responseText = `
			路径必须包含 "/sub"
			The path must contain "/sub"
			مسیر باید شامل "/sub" باشد
			
			${url.origin}/sub?host=[your host]&uuid=[your uuid]&path=[your path]
			
			
			
			
			
			
				
				https://github.com/cmliu/WorkerVless2sub
				`;
			
				return new Response(responseText, {
				status: 400,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
			
			if (!host || !uuid) {
				const responseText = `
			缺少必填参数：host 和 uuid
			Missing required parameters: host and uuid
			پارامترهای ضروری وارد نشده: هاست و یوآی‌دی
			
			${url.origin}/sub?host=[your host]&uuid=[your uuid]&path=[your path]
			
			
			
			
			
			
				
				https://github.com/cmliu/WorkerVless2sub
				`;
			
				return new Response(responseText, {
				status: 400,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
			
			if (!path || path.trim() === '') {
				path = '/?ed=2048';
			} else {
				// 如果第一个字符不是斜杠，则在前面添加一个斜杠
				path = (path[0] === '/') ? path : '/' + path;
			}
		}

		if (userAgent.includes('telegram') || userAgent.includes('twitter') || userAgent.includes('miaoko')) {
			return new Response('Hello World!');
		} else if (userAgent.includes('clash') || (format === 'clash' && !userAgent.includes('subconverter'))) {
			const subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					},
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || (format === 'singbox' && !userAgent.includes('subconverter'))){
			const subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

			try {
			const subconverterResponse = await fetch(subconverterUrl);
			
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					},
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else {
			if(host.includes('workers.dev') || host.includes('pages.dev')) {
				if (proxyhostsURL) {
					try {
						const response = await fetch(proxyhostsURL); 
					
						if (!response.ok) {
							console.error('获取地址时出错:', response.status, response.statusText);
							return; // 如果有错误，直接返回
						}
					
						const text = await response.text();
						const lines = text.split('\n');
						// 过滤掉空行或只包含空白字符的行
						const nonEmptyLines = lines.filter(line => line.trim() !== '');
					
						proxyhosts = proxyhosts.concat(nonEmptyLines);
					} catch (error) {
						console.error('获取地址时出错:', error);
					}
				}
				// 使用Set对象去重
				proxyhosts = [...new Set(proxyhosts)];
			}
			
			const newAddressesapi = await getAddressesapi();
			const newAddressescsv = await getAddressescsv();
			addresses = addresses.concat(newAddressesapi);
			addresses = addresses.concat(newAddressescsv);
			
			// 使用Set对象去重
			const uniqueAddresses = [...new Set(addresses)];
			
			const responseBody = uniqueAddresses.map(address => {
				let port = "443";
				let addressid = address;
			
				if (address.includes(':') && address.includes('#')) {
					const parts = address.split(':');
					address = parts[0];
					const subParts = parts[1].split('#');
					port = subParts[0];
					addressid = subParts[1];
				} else if (address.includes(':')) {
					const parts = address.split(':');
					address = parts[0];
					port = parts[1];
				} else if (address.includes('#')) {
					const parts = address.split('#');
					address = parts[0];
					addressid = parts[1];
				}
			
				if (addressid.includes(':')) {
					addressid = addressid.split(':')[0];
				}
				
				if (edgetunnel.trim() === 'cmliu' && RproxyIP.trim() === 'true') {
					// 将addressid转换为小写
					let lowerAddressid = addressid.toLowerCase();
					// 初始化找到的proxyIP为null
					let foundProxyIP = null;
				
					// 遍历CMproxyIPs数组查找匹配项
					for (let item of CMproxyIPs) {
						if (lowerAddressid.includes(item.type.toLowerCase())) {
							foundProxyIP = item.proxyIP;
							break; // 找到匹配项，跳出循环
						}
					}
				
					if (foundProxyIP) {
						// 如果找到匹配的proxyIP，赋值给path
						path = `/proxyIP=${foundProxyIP}`;
					} else {
						// 如果没有找到匹配项，随机选择一个proxyIP
						const randomProxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
						path = `/proxyIP=${randomProxyIP}`;
					}
				}
				
				let 伪装域名 = host ;
				let 最终路径 = path ;
				let 节点备注 = EndPS ;
				if(proxyhosts && (host.includes('workers.dev') || host.includes('pages.dev'))) {
					最终路径 = `/${host}${path}`;
					伪装域名 = proxyhosts[Math.floor(Math.random() * proxyhosts.length)];
					节点备注 = `${EndPS} 已启用临时域名中转服务，请尽快绑定自定义域！`;
				}
				const vlessLink = `vless://${uuid}@${address}:${port}?encryption=none&security=tls&sni=${伪装域名}&fp=random&type=ws&host=${伪装域名}&path=${encodeURIComponent(最终路径)}#${encodeURIComponent(addressid + 节点备注)}`;
			
				return vlessLink;
			}).join('\n');
			
			const combinedContent = responseBody + '\n' + link; // 合并内容
			const base64Response = btoa(combinedContent); // 重新进行 Base64 编码


			const response = new Response(base64Response, {
				headers: { 
					//"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
					"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
				},
			});

			return response;
		}
	}
};
