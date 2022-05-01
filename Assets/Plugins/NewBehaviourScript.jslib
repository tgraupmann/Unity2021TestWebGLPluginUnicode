mergeInto(LibraryManager.library, {

	Hello: function () {
		window.alert("Hello, world!");

		// even though the below unicode is commented out,
		// it still causes build errors
		/*
		let data =
		{
			"languages": [{
				"name": "Arabic",
				"dialects": [{
					"name": "ar-IL",
					"display": "Arabic (Israel)"
				}, {
					"name": "ar-JO",
					"display": "Arabic (Jordan)"
				}, {
					"name": "ar-AE",
					"display": "Arabic (United Arab Emirates)"
				}, {
					"name": "ar-BH",
					"display": "Arabic (Bahrain)"
				}, {
					"name": "ar-DZ",
					"display": "Arabic (Algeria)"
				}, {
					"name": "ar-SA",
					"display": "Arabic (Saudi Arabia)"
				}, {
					"name": "ar-IQ",
					"display": "Arabic (Iraq)"
				}, {
					"name": "ar-KW",
					"display": "Arabic (Kuwait)"
				}, {
					"name": "ar-MA",
					"display": "Arabic (Morocco)"
				}, {
					"name": "ar-TN",
					"display": "Arabic (Tunisia)"
				}, {
					"name": "ar-OM",
					"display": "Arabic (Oman)"
				}, {
					"name": "ar-PS",
					"display": "Arabic (State of Palestine)"
				}, {
					"name": "ar-QA",
					"display": "Arabic (Qatar)"
				}, {
					"name": "ar-LB",
					"display": "Arabic (Lebanon)"
				}, {
					"name": "ar-EG",
					"display": "Arabic (Egypt)"
				}]
			}, {
				"name": "Afrikaans",
				"dialects": [{
					"name": "af-ZA",
					"display": "Afrikaans (South Africa)"
				}]
			}, {
				"name": "Bahasa Indonesia",
				"dialects": [{
					"name": "id-ID",
					"display": "Indonesian (Indonesia)"
				}]
			}, {
				"name": "Bahasa Melayu",
				"dialects": [{
					"name": "ms-MY",
					"display": "Malay (Malaysia)"
				}]
			}, {
				"name": "Català",
				"dialects": [{
					"name": "ca-ES",
					"display": "Catalan (Spain)"
				}]
			}, {
				"name": "Čeština",
				"dialects": [{
					"name": "cs-CZ",
					"display": "Czech (Czech Republic)"
				}]
			}, {
				"name": "Dansk",
				"dialects": [{
					"name": "da-DK",
					"display": "Danish (Denmark)"
				}]
			}, {
				"name": "Deutsch",
				"dialects": [{
					"name": "de-DE",
					"display": "German (Germany)"
				}]
			}, {
				"name": "English",
				"dialects": [{
					"name": "en-AU",
					"description": "Australia"
				}, {
					"name": "en-CA",
					"description": "Canada"
				}, {
					"name": "en-IN",
					"description": "India"
				}, {
					"name": "en-NZ",
					"description": "New Zealand"
				}, {
					"name": "en-ZA",
					"description": "South Africa"
				}, {
					"name": "en-GB",
					"description": "United Kingdom"
				}, {
					"name": "en-US",
					"description": "United States"
				}]
			}, {
				"name": "Español",
				"dialects": [{
					"name": "es-AR",
					"description": "Argentina",
					"display": "Spanish (Argentina)"
				}, {
					"name": "es-BO",
					"description": "Bolivia",
					"display": "Spanish (Bolivia)"
				}, {
					"name": "es-CL",
					"description": "Chile",
					"display": "Spanish (Chile)"
				}, {
					"name": "es-CO",
					"description": "Colombia",
					"display": "Spanish (Colombia)"
				}, {
					"name": "es-CR",
					"description": "Costa Rica",
					"display": "Spanish (Costa Rica)"
				}, {
					"name": "es-EC",
					"description": "Ecuador",
					"display": "Spanish (Ecuador)"
				}, {
					"name": "es-SV",
					"description": "El Salvador",
					"display": "Spanish (El Salvador)"
				}, {
					"name": "es-ES",
					"description": "España",
					"display": "Spanish (Spain)"
				}, {
					"name": "es-US",
					"description": "Estados Unidos",
					"display": "Spanish (United States)"
				}, {
					"name": "es-GT",
					"description": "Guatemala",
					"display": "Spanish (Guatemala)"
				}, {
					"name": "es-HN",
					"description": "Honduras",
					"display": "Spanish (Honduras)"
				}, {
					"name": "es-MX",
					"description": "México",
					"display": "Spanish (Mexico)"
				}, {
					"name": "es-NI",
					"description": "Nicaragua",
					"display": "Spanish (Nicaragua)"
				}, {
					"name": "es-PA",
					"description": "Panamá",
					"display": "Spanish (Panama)"
				}, {
					"name": "es-PY",
					"description": "Paraguay",
					"display": "Spanish (Paraguay)"
				}, {
					"name": "es-PE",
					"description": "Perú",
					"display": "Spanish (Peru)"
				}, {
					"name": "es-PR",
					"description": "Puerto Rico",
					"display": "Spanish (Puerto Rico)"
				}, {
					"name": "es-DO",
					"description": "República Dominicana",
					"display": "Spanish (Dominican Republic)"
				}, {
					"name": "es-UY",
					"description": "Uruguay",
					"display": "Spanish (Uruguay)"
				}, {
					"name": "es-VE",
					"description": "Venezuela",
					"display": "Spanish (Venezuela)"
				}]
			}, {
				"name": "Euskara",
				"dialects": [{
					"name": "eu-ES",
					"display": "Basque (Spain)"
				}]
			}, {
				"name": "Filipino",
				"dialects": [{
					"name": "fil-PH",
					"display": "Filipino (Philippines)"
				}]
			}, {
				"name": "Français",
				"dialects": [{
					"name": "fr-FR",
					"display": "French (France)"
				}]
			}, {
				"name": "Galego",
				"dialects": [{
					"name": "gl-ES",
					"display": "Galician (Spain)"
				}]
			}, {
				"name": "Hrvatski",
				"dialects": [{
					"name": "hr-HR",
					"display": "Croatian (Croatia)"
				}]
			}, {
				"name": "IsiZulu",
				"dialects": [{
					"name": "zu-ZA",
					"display": "Zulu (South Africa)"
				}]
			}, {
				"name": "Íslenska",
				"dialects": [{
					"name": "is-IS",
					"display": "Icelandic (Iceland)"
				}]
			}, {
				"name": "Italiano",
				"dialects": [{
					"name": "it-IT",
					"description": "Italia",
					"display": "Italian (Italy)"
				}, {
					"name": "it-CH",
					"description": "Svizzera"
				}]
			}, {
				"name": "Lietuvių",
				"dialects": [{
					"name": "lt-LT",
					"display": "Lithuanian (Lithuania)"
				}]
			}, {
				"name": "Magyar",
				"dialects": [{
					"name": "hu-HU",
					"display": "Hungarian (Hungary)"
				}]
			}, {
				"name": "Nederlands",
				"dialects": [{
					"name": "nl-NL",
					"display": "Dutch (Netherlands)"
				}]
			}, {
				"name": "Norsk bokmål",
				"dialects": [{
					"name": "nb-NO",
					"display": "Norwegian Bokmål (Norway)"
				}]
			}, {
				"name": "Polski",
				"dialects": [{
					"name": "pl-PL",
					"display": "Polish (Poland)"
				}]
			}, {
				"name": "Português",
				"dialects": [{
					"name": "pt-BR",
					"description": "Brasil",
					"display": "Portuguese (Brazil)"
				}, {
					"name": "pt-PT",
					"description": "Portugal",
					"display": "Portuguese (Portugal)"
				}]
			}, {
				"name": "Română",
				"dialects": [{
					"name": "ro-RO",
					"display": "Romanian (Romania)"
				}]
			}, {
				"name": "Slovenščina",
				"dialects": [{
					"name": "sl-SI",
					"display": "Slovenian (Slovenia)"
				}]
			}, {
				"name": "Slovenčina",
				"dialects": [{
					"name": "sk-SK",
					"display": "Slovak (Slovakia)"
				}]
			}, {
				"name": "Suomi",
				"dialects": [{
					"name": "fi-FI",
					"display": "Finnish (Finland)"
				}]
			}, {
				"name": "Svenska",
				"dialects": [{
					"name": "sv-SE",
					"display": "Swedish (Sweden)"
				}]
			}, {
				"name": "Tiếng Việt",
				"dialects": [{
					"name": "vi-VN",
					"display": "Vietnamese (Vietnam)"
				}]
			}, {
				"name": "Türkçe",
				"dialects": [{
					"name": "tr-TR",
					"display": "Turkish (Turkey)"
				}]
			}, {
				"name": "Ελληνικά",
				"display": "Greek",
				"dialects": [{
					"name": "el-GR",
					"display": "Greek (Greece)"
				}]
			}, {
				"name": "български",
				"display": "Bulgarian",
				"dialects": [{
					"name": "bg-BG",
					"display": "Bulgarian (Bulgaria)"
				}]
			}, {
				"name": "Pусский",
				"display": "Russian",
				"dialects": [{
					"name": "ru-RU",
					"display": "Russian (Russia)"
				}]
			}, {
				"name": "Српски",
				"display": "Serbian",
				"dialects": [{
					"name": "sr-RS",
					"display": "Serbian (Serbia)"
				}]
			}, {
				"name": "Українська",
				"display": "Ukrainian",
				"dialects": [{
					"name": "uk-UA",
					"display": "Ukrainian (Ukraine)"
				}]
			}, {
				"name": "한국어",
				"display": "Korean",
				"dialects": [{
					"name": "ko-KR",
					"display": "Korean (South Korea)"
				}]
			}, {
				"name": "中文",
				"display": "Chinese",
				"dialects": [{
					"name": "cmn-Hans-CN",
					"description": "普通话 (中国大陆)",
					"display": "Mandarin (Simplified, China)"
				}, {
					"name": "cmn-Hans-HK",
					"description": "普通话 (香港)",
					"display": "Mandarin (Simplified, Hong Kong)"
				}, {
					"name": "cmn-Hant-TW",
					"description": "中文 (台灣)",
					"display": "Mandarin (Traditional, Taiwan)"
				}, {
					"name": "yue-Hant-HK",
					"description": "粵語 (香港)",
					"display": "Cantonese (Traditional, Hong Kong)"
				}]
			}, {
				"name": "日本語",
				"display": "Japanese",
				"dialects": [{
					"name": "ja-JP",
					"display": "Japanese (Japan)"
				}]
			}, {
				"name": "हिन्दी",
				"display": "Hindi",
				"dialects": [{
					"name": "hi-IN",
					"display": "Hindi (India)"
				}]
			}, {
				"name": "ภาษาไทย",
				"display": "Thai",
				"dialects": [{
					"name": "th-TH",
					"display": "Thai (Thailand)"
				}]
			}]
		};
		*/

	},

	HelloString: function (str) {
		window.alert(UTF8ToString(str));
	},

	PrintFloatArray: function (array, size) {
		for (var i = 0; i < size; i++)
			console.log(HEAPF32[(array >> 2) + i]);
	},

	AddNumbers: function (x, y) {
		return x + y;
	},

	StringReturnValueFunction: function () {
		var returnStr = "bla";
		var bufferSize = lengthBytesUTF8(returnStr) + 1;
		var buffer = _malloc(bufferSize);
		stringToUTF8(returnStr, buffer, bufferSize);
		return buffer;
	},

	BindWebGLTexture: function (texture) {
		GLctx.bindTexture(GLctx.TEXTURE_2D, GL.textures[texture]);
	},

});
