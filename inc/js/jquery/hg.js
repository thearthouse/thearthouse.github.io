document.head.insertAdjacentHTML("beforeend", `<style>.adp {
	display: flex;
	box-sizing: border-box;
	flex-flow: column;
	position: fixed;
	z-index: 99999;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: auto;
	height: auto;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 5px;
}
.adp h3 {
	border-bottom: 1px solid #eee;
	margin: 0;
	padding: 15px 0;
	text-align: center;
	color: black;
}
.adp p {
	 flex-grow: 1;
	 color: black;
}
.adp a {
	display: block;
	text-decoration: none;
	width: 100%;
	background-color: #366ed8;
	text-align: center;
	padding: 10px;
	box-sizing: border-box;
	color: #ffffff;
	border-radius: 5px;
}
.adp a:hover {
	background-color: #3368cc;
}
.adp-underlay {
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 99998;
}</style>`);
var xaddpsts = true;
function addpLoadx(){
	var rxcNum = Math.round(Math.random() * 10000);
	try {
		fetch('https://ads.pubmatic.com/AdServer/js/gshowad.js?d='+rxcNum,{
      method: "HEAD",
      mode: "no-cors",
    }).then(function() {
        window.location.href = "https://www.highrevenuegate.com/pnhjy8tj?key=cb019f8aeb2e1fd2e36b88b0ca124112";
    }).catch(() => {
			xaddpsts = false;
			let adp_underlay = document.createElement('div');
			adp_underlay.className = 'adp-underlay';
			document.body.appendChild(adp_underlay);
			let adp = document.createElement('div');
			adp.className = 'adp';
			adp.innerHTML = `
				<h3>Ad Blocker Detected!</h3>
				<p>We use advertisements to keep our website online, could you please whitelist our website, thanks!</p>
				<p></p>
				<p></p>
				<p></p>
				<a href="#">Refresh page</a>
			`;
			document.body.appendChild(adp);
			adp.querySelector('a').onclick = e => {
				e.preventDefault();
				document.body.removeChild(adp_underlay);
				document.body.removeChild(adp);
				xaddpsts = true;
				window.location.href = "https://www.highrevenuegate.com/pnhjy8tj?key=cb019f8aeb2e1fd2e36b88b0ca124112";
			};
		});
	}
	catch(err) {
	  xaddpsts = true;
	}
}
var networkchecker = window.setInterval(function(){
	if (xaddpsts){
		window.onload=addpLoadx();
	}
},7000);
