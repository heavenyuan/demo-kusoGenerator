(function () {
	"use strict";

	var canvas = document.getElementById("myCanvas"),
		ctx = canvas.getContext("2d"),
		$cb = $(".canvas-block"),
		$inp = $("#inpText"),
		$sel = $("#sel"),
		$filter = $("#filter"),
		$range = $("#inpRange"),
		$save = $("#save"),
		$iphone = $("#iphone"),
		$native = $("#native"),
		$imgur = $("#imgur"),
		$line = $("#line"),
		$fb = $("#fb"),
		$post = $("#post"),
		chk = false,
		fs = 40,
		ff = "DFKai-sb",
		width = 500,
		height = 500,
		txs = 1,
		sx = 1,
		sy = 1,
		sc = width / height,
		ta = "r",
		filter = "0",
		color = "white",
		tma,
		imgData,
		tmpText,
		tmpFs,
		tmpFf,
		dx,
		dy,
		tmpImg,
		tmpFilter,
		tcolor,
		siteCategory = {
			element: ["#typeSel", "#categorySel"],
			data: [
				["柴犬", "狗", "網友提供狗", "貓", "網友提供貓", "龜", "鹿"],
				[
					[
						"fdhg5re.jpg",
						"7d65w.jpg",
						"fdy54fg.jpg",
						"g6hd54.jpg",
						"gf65gfd.jpg",
						"gfdsg.jpg",
						"gsfdh4.jpg",
						"gtd43j7.jpg",
						"j67k8.jpg",
						"r35tgf.jpg",
						"y3thtr.jpg",
					],
					["fds52.jpg", "k97kg.jpg", "r2s4s.jpg", "se32.jpg", "uiuty3.jpg", "xz13.jpg", "z13m.jpg"],
					["wet56.jpg", "ku67ku.jpg", "dsf45.jpg", "f326hjf.jpg", "sdf276.jpg", "n8762.jpg"],
					[
						"g8i3fv.jpg",
						"gj4hgj7.jpg",
						"rey5re.jpg",
						"jhr4fd.jpg",
						"kl7u76c.jpg",
						"f45gf.jpg",
						"hg652.jpg",
						"hre43.jpg",
					],
					[
						"qq232.jpg",
						"fds93l.jpg",
						"k743d.jpg",
						"kni24e.jpg",
						"ifwhd.png",
						"ndd5b.jpg",
						"q8y2y.jpg",
						"sfiha.jpg",
						"x8973.jpg",
					],
					// ['3xoxh.jpg','7d65w.jpg'],
					["b2z54.jpg"],
					["crmle.jpg"],
				],
			],
		};

	var previewImage = function (e) {
		var file = e.target.files[0];

		if (!file) return;

		if (!file.type.match(/image.*/)) {
			alert("請選擇圖片檔案");
			return;
		}

		var reader = new FileReader();

		reader.onerror = function() {
			alert("讀取檔案失敗，請重試");
		};

		reader.onload = function (e) {
			var img = new Image();
			img.src = e.target.result;

			img.onerror = function() {
				alert("圖片載入失敗，請確認檔案格式");
			};

			img.onload = function (e) {
				imgData = e.target;
				sc = imgData.width / imgData.height;
				height = width / sc;
				$cb.css("height", height);
				checkText();
			};
		};

		reader.readAsDataURL(file);
		tracking("button", "upload", "kusoGenUpload");
	};

	var loadImg = function (pic) {
		var img = new Image();
		img.src = "img/" + pic;

		img.onerror = function() {
			console.error("圖片載入失敗:", pic);
			alert("預設圖片載入失敗，請重新整理頁面");
		};

		img.onload = function (e) {
			imgData = e.target;
			sc = imgData.width / imgData.height;
			height = width / sc;
			$cb.css("height", height);
			checkText();
		};
	};

	var createBg = function () {
		ctx.clearRect(0, 0, 1000, 1000);
		// ctx.drawImage(imgData,0,0,width,height);
		imgData.width = width;
		imgData.height = height;

		var tmpCanvas = $("<canvas>").prop({ width: width, height: height })[0];
		var tmpxt = tmpCanvas.getContext("2d");
		tmpxt.drawImage(imgData, 0, 0, width, height);
		var iData = tmpxt.getImageData(0, 0, width, height);
		var imgDataTmp;
		var newCanvas = $("<canvas>").prop({ width: width, height: height })[0];
		var newxt = newCanvas.getContext("2d");
		newxt.putImageData(iData, 0, 0);
		imgDataTmp = newxt.getImageData(0, 0, width, height);
		var pixels = imgDataTmp.data;

		switch (filter) {
			case 1:
				for (var i = 0; i < pixels.length; i += 4) {
					var bright = 50;
					pixels[i] = pixels[i] + bright;
					pixels[i + 1] = pixels[i + 1] + bright;
					pixels[i + 2] = pixels[i + 2] + bright;
				}
				newxt.putImageData(imgDataTmp, 0, 0);
				break;
			case 2:
				for (var i = 0; i < pixels.length; i += 4) {
					var rgb = (pixels[i] + pixels[i + 1] + pixels[i + 2]) >>> 2;
					pixels[i] = rgb;
					pixels[i + 1] = rgb;
					pixels[i + 2] = rgb;
				}
				newxt.putImageData(imgDataTmp, 0, 0);
				break;
			case 3:
				for (var i = 0; i < pixels.length; i += 4) {
					var r = pixels[i],
						g = pixels[i + 1],
						b = pixels[i + 2];
					pixels[i] = r * 0.393 + g * 0.769 + b * 0.189;
					pixels[i + 1] = r * 0.349 + g * 0.686 + b * 0.168;
					pixels[i + 2] = r * 0.272 + g * 0.534 + b * 0.131;
				}
				newxt.putImageData(imgDataTmp, 0, 0);
				break;
			case 4:
				for (var i = 0; i < pixels.length; i += 4) {
					pixels[i] = 255 - pixels[i];
					pixels[i + 1] = 255 - pixels[i + 1];
					pixels[i + 2] = 255 - pixels[i + 2];
				}
				newxt.putImageData(imgDataTmp, 0, 0);
				break;
			case 5:
				for (var i = 0; i < pixels.length; i += 4) {
					var rgb = pixels[i] + pixels[i + 1] + pixels[i + 2];
					if (rgb > 420) {
						pixels[i] = 255;
						pixels[i + 1] = 255;
						pixels[i + 2] = 255;
					}
				}
				newxt.putImageData(imgDataTmp, 0, 0);
				break;
		}

		ctx.drawImage(newCanvas, 0, 0, width, height);
	};

	var createLoading = function () {
		var w = $cb.width() / 2,
			h = $cb.height() / 2;
		ctx.clearRect(0, 0, 1000, 1000);
		ctx.strokeText("Loading..", w, h);
		ctx.fillText("Loading..", w, h);
	};

	var wrapText = function (txt, x, y, lineHeight) {
		var words = txt.split(""),
			i,
			l;

		for (i = 0, l = words.length; i < l; i++) {
			ctx.strokeText(words[i], x, y);
			ctx.fillText(words[i], x, y);
			switch (ta) {
				case "l":
				case "r":
					y += lineHeight;
					break;
				case "t":
				case "b":
					x += lineHeight;
					break;
			}
		}
	};

	var checkText = function () {
		var txt = $inp.val(),
			fs = $range.val(),
			ff = $sel.val(),
			lineHeight,
			ch,
			n,
			y,
			x = width * 0.2,
			i,
			l,
			p,
			ttt;

		if (!imgData) return;
		if (
			tmpText != txt ||
			tmpFs != fs ||
			tsx != sx ||
			tma != ta ||
			tmpFf != ff ||
			tmpImg != imgData ||
			tmpFilter != filter ||
			tcolor != color
		) {
			tmpText = txt;
			tmpFs = fs;
			sx = tsx;
			tma = ta;
			tmpFf = ff;
			tmpImg = imgData;
			tmpFilter = filter;
			tcolor = color;
			lineHeight = parseInt(fs, 10) + 20;
			l = txt.length;
			switch (ta) {
				case "l":
				case "r":
					ch = height - lineHeight;
					break;
				case "t":
				case "b":
					ch = width - lineHeight;
					break;
			}
			n = Math.floor(ch / lineHeight) + 1;
			p = Math.floor((l + (n - 1)) / n);
			createBg();

			ctx.font = fs + "px " + ff;
			ctx.fillStyle = color;
			if (l > n) {
				for (i = 0; i < p; i++) {
					ttt = txt.substr(i * n, n);
					switch (ta) {
						case "l":
							x = width * 0.1 + (parseInt(fs, 10) + 20) * i;
							y = (height - n * (lineHeight - 2) + lineHeight) / 2;
							break;
						case "r":
							x = width * 0.9 - (parseInt(fs, 10) + 20) * i;
							y = (height - n * (lineHeight - 2) + lineHeight) / 2;
							break;
						case "t":
							x = (width - n * (lineHeight - 2) + lineHeight) / 2;
							y = height * 0.1 + (parseInt(fs, 10) + 20) * i;
							break;
						case "b":
							x = (width - n * (lineHeight - 2) + lineHeight) / 2;
							y = height * 0.95 - (parseInt(fs, 10) + 20) * (p - 1) + (parseInt(fs, 10) + 20) * i;
							break;
					}
					wrapText(ttt, x, y, lineHeight);
				}
			} else {
				switch (ta) {
					case "l":
						x = width * 0.2;
						y = (height - l * (lineHeight - 2) + lineHeight) / 2;
						break;
					case "r":
						x = width * 0.8;
						y = (height - l * (lineHeight - 2) + lineHeight) / 2;
						break;
					case "t":
						x = (width - l * (lineHeight - 2) + lineHeight) / 2;
						y = height * 0.1;
						break;
					case "b":
						x = (width - l * (lineHeight - 2) + lineHeight) / 2;
						y = height * 0.95;
						break;
				}
				wrapText(txt, x, y, lineHeight);
			}
		}

		if (chk) requestAnimationFrame(checkText);
	};

	var getBase64 = function () {
		var w = $cb.width(),
			h = $cb.height(),
			imgData,
			newCanvas,
			outputCanvas;

		imgData = ctx.getImageData(0, 0, width, height);
		newCanvas = $("<canvas>").prop({ width: w, height: h })[0];
		newCanvas.getContext("2d").putImageData(imgData, 0, 0);
		outputCanvas = $("<canvas>").prop({ width: w, height: h })[0];
		outputCanvas.getContext("2d").drawImage(newCanvas, 0, 0, w, h);
		return outputCanvas.toDataURL("image/png");
	};

	var resize = function (e) {
		// console.log($('.container').width())
		tsx = $cb.width() / 500;
		width = $cb.width();
		height = width / sc;

		$cb.css({ height: height });
		checkText();
	};

	var uploadImgur = function (dataURL, callBack, errorCallback) {
		dataURL = dataURL.split(",")[1];
		$.ajax({
			url: "https://api.imgur.com/3/image",
			type: "post",
			headers: {
				Authorization: "Client-ID",
			},
			data: {
				image: dataURL,
				album: "",
				title: "回文圖產生器趴兔 - http://c2digital.com.tw/demo/kusogen/",
				description: tmpText,
			},
			dataType: "json",
			success: function (response) {
				if (response.success) {
					callBack.call(this, response);
				} else {
					if (errorCallback) errorCallback("上傳失敗");
				}
			},
			error: function(xhr, status, error) {
				console.error("imgur API 錯誤:", status, error);
				if (errorCallback) {
					if (xhr.status === 429) {
						errorCallback("上傳次數過多，請稍後再試");
					} else if (xhr.status === 403) {
						errorCallback("API 權限錯誤，請聯繫管理員");
					} else {
						errorCallback("網路錯誤，請檢查連線後重試");
					}
				}
			}
		});
	};

	var downloadCanvas = function (link, dataURL, filename) {
		link.href = dataURL;
		link.download = filename;
	};

	var tracking = function (category, action, label) {
		try {
			ga("send", "event", category, action, label);
		} catch (e) {}
	};

	var createImgList = function (arr) {
		var i,
			l,
			$ic = $(".img-container");

		$ic.empty();
		for (i = 0, l = arr.length; i < l; i++) {
			$ic.append('<div class="img-content" data-img="' + arr[i] + '"><img src="img/' + arr[i] + '"></div>');
		}
	};

	var selectObject = (function () {
		var appendData1 = function (arr, ta) {
			var i;
			ta.html("");
			for (i = 0; i < arr.length; i++) {
				ta.append('<option value="' + i + '">' + arr[i] + "</option>\n");
			}
		};
		var appendData2 = function (arr, ta) {
			var i;
			ta.html("");
			for (i = 0; i < arr.length; i++) {
				ta.append('<option value="' + arr[i] + '">圖片' + (i + 1) + "</option>\n");
			}
		};
		var init = function (d) {
			var data = $.extend({}, d);

			$(data.element[0]).each(function (i, elm) {
				var ta = $(elm);

				ta.on("change", function (e) {
					var arr = data.data[1][$(this).val()];
					createImgList(arr);
					loadImg(arr[0]);
				});
				appendData1(data.data[0], ta);
			});
		};
		return {
			init: init,
		};
	})();

	var init = function () {
		$(window).on("resize", resize);
		// ctx.strokeStyle='black';
		ctx.lineWidth = 2;
		ctx.textAlign = "center";
		resize();
		$inp.on("focus", function (e) {
			chk = true;
			checkText();
		});
		$inp.on("blur", function (e) {
			chk = false;
		});
		$("#ar").prop("checked", true);
		$(".tAlign").on("change", function (e) {
			e.preventDefault();
			ta = $(this).val();
			checkText();
			tracking("radio", "change", "kusoGenText:" + ta);
		});
		$range.val(fs);
		$range.on("change", function (e) {
			e.preventDefault();
			checkText();
		});
		$save.on("click", function (e) {
			// e.preventDefault();
			$(this).css("pointer-events", "none");
			var dataURL = getBase64();
			downloadCanvas(this, dataURL, tmpText + ".png");
			setTimeout(function () {
				$save.css("pointer-events", "auto");
			}, 500);
			tracking("button", "save", "kusoGenSave1");
		});
		$iphone.on("click", function (e) {
			e.preventDefault();
			$(this).css("pointer-events", "none");
			var dataURL = getBase64();
			window.open(dataURL);
			setTimeout(function () {
				$iphone.css("pointer-events", "auto");
			}, 500);
			tracking("button", "save", "kusoGenSave2");
		});
		$imgur.on("click", function (e) {
			e.preventDefault();
			$(this).css("pointer-events", "none").text("請稍候");
			uploadImgur(getBase64(),
				function (response) {
					$imgur.css("pointer-events", "auto").text("上傳imgur");
					window.location.href = response.data.link;
				},
				function (errorMsg) {
					$imgur.css("pointer-events", "auto").text("上傳imgur");
					alert(errorMsg);
				}
			);
			tracking("button", "save", "kusoGenUploadImgur");
		});
		$fb.on("click", function (e) {
			e.preventDefault();
			$(this).css("pointer-events", "none").text("請稍候");
			var u = navigator.userAgent;
			var p = "iframe";
			if (u.indexOf("Mobile") > -1) {
				p = "touch";
			}

			uploadImgur(getBase64(),
				function (response) {
					$fb.css("pointer-events", "auto").text("facebook分享");
					FB.ui(
						{
							method: "feed",
							display: p,
							link: response.data.link,
							picture: response.data.link,
							name: tmpText,
							description: "回文圖產生器趴兔",
						},
						function (response) {}
					);
				},
				function (errorMsg) {
					$fb.css("pointer-events", "auto").text("facebook分享");
					alert("上傳失敗，無法分享到 Facebook\n" + errorMsg);
				}
			);
			tracking("button", "save", "kusoGenShareFB");
		});
		$line.on("click", function (e) {
			// e.preventDefault();
			$(this).css("pointer-events", "none").children("span").text("請稍候");
			uploadImgur(getBase64(),
				function (response) {
					$line.css("pointer-events", "auto").children("span").text("用LINE傳送");
					window.location.href =
						"http://line.naver.jp/R/msg/text/?" +
						encodeURIComponent(tmpText) +
						"%0A" +
						encodeURIComponent(response.data.link);
				},
				function (errorMsg) {
					$line.css("pointer-events", "auto").children("span").text("用LINE傳送");
					alert("上傳失敗，無法分享到 LINE\n" + errorMsg);
				}
			);
			tracking("button", "save", "kusoGenShareLine");
		});
		$sel.on("change", function (e) {
			checkText();
		});
		$("#fileUpload").change(previewImage);
		$filter.val(filter);
		$filter.on("change", function (e) {
			e.preventDefault();
			filter = parseInt($(this).val(), 10);
			checkText();
		});
		selectObject.init(siteCategory);
		$(document).on("change", "#typeSel,#categorySel", function (e) {
			// console.log($('#categorySel').val())
			createLoading();
			// tracking('select','change','kusoGen'+$('#typeSel :selected').html()+$('#categorySel :selected').html());
		});
		createImgList(siteCategory.data[1][0]);
		loadImg(siteCategory.data[1][0][0]);
		$($(".img-container div")[0]).addClass(".act");
		$(document)
			.on("click", ".img-content", function (e) {
				e.preventDefault();
				loadImg($(this).data("img"));
			})
			.on("click", ".text-color", function (e) {
				e.preventDefault();
				color = $(this).data("color");
				checkText();
			});
		$(".inline").fancybox({
			content:
				'<div class="content">使用方法:<br>請自行試試可以成功儲存的方法<br>(((推薦)))<br>儲存圖片1點了會直接下載<br>(((上述無法成功)))<br>儲存圖片2會另開一頁圖片<br><ul><li>電腦請點右鍵另存</li><li>手機請一隻手指頭按住選下載</li></ul>(((仍無法成功)))<br>上傳imgur會將圖片上傳到imgur<br>上傳時間根據您的頻寬而定，請稍候<br>上傳完成會轉到imgur的頁面<br>再自行下載<br>字型這種東西就是你裝置裡有就有...<br>如果有任何問題或建議可以在下面留言<br>不能下載的朋友請提供一下您的手機或電腦、使用的瀏覽器及發生的情況讓我比較好找問題唷</div>',
		});
	};

	init();
})();
