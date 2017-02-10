///载入jQuery，并且初始化JmoJsTools
if (window.jQuery === undefined ) {
	var done = false;
	var script = document.createElement("script");
	script.src = "http://199.234.20.149/info/js/jquery-1.4.2.min.js";
	script.onload = script.onreadystatechange = function() {
		if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
			done = true;
			initJmoJsTools();
		}
	};
	document.getElementsByTagName("head")[0].appendChild(script);
} else {
	initJmoJsTools();
}

///声明jmojs函数，供bookmarklet判断是否加载成功。
function jmojs() {
	alert('jmojs loaded!');
}

///客供件采购组织及采购组选择
function jmoFI() {
	var myDataTable = $("table#ctl00_ContentPlaceHolder1_gridView.gridview", window.parent.frames[3].document);
  var myRows = $('tr',myDataTable).filter(function() {return $(this).css('font-size') == '10pt';});
	var myRowsCount = myRows.size();
  console.log(myRowsCount);
	for (i = 0; i < myRowsCount ; i++) {
		var purGrp = $("td select", myRows[i])[0];
		var purOrg = $("td select", myRows[i])[1];
		purGrp.value = 252;
		purOrg.value = 1500;
	}
}

///客供件采购到货日期修改
function jmoDate() {
	var myDataTable = $("table#ctl00_ContentPlaceHolder1_gridView.gridview", window.parent.frames[3].document);
  var myRows = $('tr',myDataTable).filter(function() {return $(this).css('font-size') == '10pt';});
	var myRowsCount = myRows.size();
  console.log(myRowsCount);
	for (i = 0; i < myRowsCount ; i++) {
		var purDate = $("td input", myRows[i])[2];
		console.log(purDate.value)
		purDate.value = '2017-01-31';
	}
}

///半成品注册选择
function jmoZbcp() {
	var myDataTable = $("table#ctl00_ContentPlaceHolder1_gridView.gridview", window.parent.frames[3].document);
  var myRows = $('tr',myDataTable).filter(function() {return $(this).css('font-size') == '10pt';});
	var myRowsCount = myRows.size();
  //console.log(myRowsCount);
	//var arr = Array( 'YH16013708001P0700', 'YH16013708001P1200', 'YH16013708001P0100', 'YH16013708001P1800', 'YH16013708001P0500', 'YH16013708001P1700', 'YH16013708001P2701', 'YH16013708001P0901', 'YH16013708001P2301', 'YH16013708001P2201', 'YH16013708001P0900', 'YH16013708001P1300', 'YH16013708001P2000', 'YH16013708001P0400', 'YH16013708001P1600', 'YH16013708001P1601', 'YH16013708001P0300', 'YH16013708001P0200', 'YH16013708001P1301', 'YH16013708001P1100', 'YH16013708001P1900', 'YH16013708001P0101', 'YH16013708001P0801', 'YH16013708001P1500', 'YH16013708001P2602', 'YH16013708001P0501', 'YH16013708001P3101', 'YH16013708001P3401', 'YH16013708001P0600', 'YH16013708001P0800', 'YH16013708001P1000', 'YH16013708001P1400', 'YH16013708001P2801');

	count = 0 ;
	var arr = Array('XH1680335ZR0023', 'XH1680335ZR0024', 'XH1680335ZR0025', 'XH1680335ZR0026', 'XH1680335ZR0027', 'XH1680335ZR0028', 'XH1680335ZR0029', 'XH1680335ZR0030', 'XH1680335ZR0031', 'XH1680335ZR0032', 'XH1680335ZR0033', 'XH1680335ZR0034', 'XH1680335ZR0035', 'XH1680335ZR0036', 'XH1680335ZR0037', 'XH1680335ZR0038', 'XH1680335ZR0039', 'XH1680335ZR0040', 'XH1680335ZR0041', 'XH1680335ZR0042', 'XH1680335ZR0043', 'XH1680335ZR0044', 'XH1680335ZR0045', 'XH1680335ZR0046', 'XH1680335ZR0047', 'XH1680335ZR0048', 'XH1680335ZR0049', 'XH1680335ZR0050', 'XH1680335ZR0051', 'XH1680335ZR0052', 'XH1680335ZR0053', 'XH1680335ZR0054', 'XH1680335ZR0055', 'XH1680335ZR0056', 'XH1680335ZR0057', 'XH1680335ZR0058', 'XH1680335ZR0059', 'XH1680335ZR0060', 'XH1680335ZR0061', 'XH1680335ZR0062', 'XH1680335ZR0063', 'XH1680335ZR0064', 'XH1680335ZR0065', 'XH1680335ZR0066', 'XH1680335ZR0067', 'XH1680335ZR0068', 'XH1680335ZR0069', 'XH1680335ZR0070', 'XH1680335ZR0071', 'XH1680335ZR0072', 'XH1680335ZR0073', 'XH1680335ZR0074', 'XH1680335ZR0075', 'XH1680335ZR0076', 'XH1680335ZR0077', 'XH1680335ZR0078', 'XH1680335ZR0079', 'XH1680335ZR0080', 'XH1680335ZR0081', 'XH1680335ZR0082', 'XH1680335ZR0083', 'XH1680335ZR0084', 'XH1680335ZR0085', 'XH1680335ZR0086', 'XH1680335ZR0087', 'XH1680335ZR0088', 'XH1680335ZR0089', 'XH1680335ZR0090', 'XH1680335ZR0091', 'XH1680335ZR0092', 'XH1680335ZR0093', 'XH1680335ZR0094', 'XH1680335ZR0095', 'XH1680335ZR0096');
	for (i = 0; i < myRowsCount ; i++) {
		var sapCode = $("td", myRows[i])[3].textContent;
		var ck = $("td input", myRows[i])[1];
		for(var j=0,k=arr.length;j<k;j++){
		    if(sapCode==arr[j]){
						//console.log(sapCode);
    				ck.checked = true;
						count = count + 1;
						break;
		    }
		}
	}
	alert(count);
}

///JmoJsTools 初始化
function initJmoJsTools() {
	//console.log('hello world');
	//var myHead = $('form#Form1 table tbody tr td:nth-child(3)',window.parent.frames[0].document);
	//var myToolbar = $('tr td:nth-child(2)',myHead);
	//myToolbar.empty();
  //myToolbar.append('&nbsp;&nbsp;');
	//myToolbar.append('<a href="javascript:jmojs();" class="hsq" >采购申请 </a>');
  //myToolbar.append('&nbsp;|&nbsp;');
	//myToolbar.append('<a href="javascript:alert()" class="hsq" >审核通过 </a>');
	console.log('init finished');
}

//cross domain failed!
function jmoPo2() {
	$.get('http://192.168.67.111/assets/js/test.json').done(function(data){(window.myBookmarklet = function() {
				var mydict = data;
				var myDataTable = $("table#ctl00_ContentPlaceHolder1_gridview.gridview", window.parent.frames[3].document);
				//var myRows = $("tr", myDataTable);
				//直接提取带有特定属性的tr，否则会抓到下一页的tr
        var myRows = $('tr',myDataTable).filter(function() {return $(this).css('font-size') == '10pt';});
				var myRowsCount = myRows.size();
			  console.log(myRowsCount);
				// -2 如果页面内容只有一页，那么就不能-2
				for (i = 0; i < myRowsCount ; i++) {
					var sapCode = $("td", myRows[i])[0].textContent;
					console.log(sapCode);
					var poQty = mydict[sapCode];
					console.log(poQty);
					if (poQty !== undefined){
						var qty = $("td input", myRows[i])[0];
						qty.value = poQty;
					}
				}
		})();
	});

}


function jmoPo() {
	if (window.jQuery === undefined ) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://199.234.20.149/info/js/jquery-1.4.2.min.js";
		script.onload = script.onreadystatechange = function() {
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	function initMyBookmarklet() { (window.myBookmarklet = function() {
				var mydict = {
'ABTBW330EEBE':3,
'AAJBUC30DDBM':4,
'AAJBUC30EEBM':2,
'AAFACRFQRRBQ':13,
'XH1680335ZY0180':19,
'XH1680335ZY0181':1,
'XH1680335ZY0182':1,
'AAJBQBF0FDDBF':2,
'AJAIC30TDAA':1,
'AJAIC301DAA':1,
'AJAI3301EAL':1,
'AJAI330TEAA':1,
'AJAI330WEAA':1,
'AJAI330REAA':6,
'XH1680335ZY0183':2,
'XH1680335ZY0184':2,
'AAPCBR0KEEAW':2,
'XH1680335ZY0147':14,
'AATAQB0QTNAE':1,
'XH1680335ZY0185':1,
'XH1680335ZY0186':3,
'XH1680335ZY0187':4,
'XH1680335ZY0106':3,
'XH1680335ZY0206':16,
'XH1680335ZY0207':2,
'XH1680335ZY0208':14,
'XH1680335ZY0209':2,
'XH1680335ZY0210':2,
'XH1680335ZY0211':6,
'XH1680335ZY0212':11,
'XH1680335ZY0213':26,
'XH1680335ZY0214':2,
'XH1680335ZY0215':3,
'XH1680335ZY0216':3,
'XH1680335ZY0217':1,
'XH1680335ZY0218':1,
'XH1680335ZY0188':1,
'XH1680335ZY0189':6,
'CTA3BD0PFDAH':2,
'CTA3BQ0PEDAH':1,
'XH1680335ZY0190':10,
'CTA3BD0FHEAM':2,
'XH1680335ZY0191':2,
'CTA3BC0KFEAI':2,
'DTA4BD0PHFAH':5,
'DTA4BD0FEDAM':4,
'XH1680335ZY0193':1,
'ABTAFC30HHBU':2,
'AATAFB0KLJAE':3,
'XH1680335ZY0064':2,
'AATAFB0KNJAE':2,
'AATAFB0KNLAE':2,
'AATAFB0KRLAE':3,
'AATAFB0AONHAE':2,
'AATAFB0QTTAE':3,
'AATAFB0QVVAE':2,
'AATAFB0KLLAE':4,
'AATAFB0KRRAE':4,
'AATAFB0KRRAE':4,
'ABTAFC30FEBU':2,
'ABTAFC30HDBU':2,
'ABTAFC30HEBU':2,
'ABTAF330JHBE':1,
'XH1680335ZS0121':2,
'XH1680335ZS0122':12,
'XH1680335ZS0123':3,
'XH1680335ZS0124':4,
'XH1680335ZS0125':8,
'XH1680335ZS0126':1,
'XH1680335ZS0127':2,
'XH1680335ZS0127':3,
'XH1680335ZS0128':2,
'XH1680335ZS0129':1,
'XH1680335ZS0130':2,
'XH1680335ZS0131':1,
'XH1680335ZS0132':2,
'XH1680335ZS0133':3,
'XH1680335ZS0134':2,
'XH1680335ZS0136':24,
'XH1680335ZS0137':3,
'XH1680335ZS0138':2,
'XH1680335ZY0176':4,
'ABTBHB0B11BT':2,
'AAFASRB0VVBQ':1,
'AAFASRD0NNBQ':1,
'AAFASRD0TTBQ':1,
'AAFASRB0JJAN':2,
'XH1680335ZY0178':2,
'AAFACRFQLLBQ':2,
'XH1680335ZY0179':1,
'XH1680335ZY0192':2,
'XH1680335ZY0194':1,
'AATAFB0KRNAE':2,
'XH1680335ZY0200':1
				};
				var myDataTable = $("table#ctl00_ContentPlaceHolder1_gridview.gridview", window.parent.frames[3].document);
				//var myRows = $("tr", myDataTable);
				//直接提取带有特定属性的tr，否则会抓到下一页的tr
        var myRows = $('tr',myDataTable).filter(function() {return $(this).css('font-size') == '10pt';});
				var myRowsCount = myRows.size();
			  console.log(myRowsCount);
				// -2 如果页面内容只有一页，那么就不能-2
				for (i = 0; i < myRowsCount ; i++) {
					var sapCode = $("td", myRows[i])[0].textContent;
					console.log(sapCode);
					var poQty = mydict[sapCode];
					console.log(poQty);
					if (poQty !== undefined){
						var qty = $("td input", myRows[i])[0];
						qty.value = poQty;
					}
				}
		})();
	}
}

