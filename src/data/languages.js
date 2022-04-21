const languages = [
  {
    name: "Chinese",
    code: "zh",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Russian",
    code: "ru",
  },
  {
    name: "Arabic",
    code: "ar",
  },
  {
    name: "Portuguese",
    code: "pt",
  },
  {
    name: "Bengali",
    code: "bn",
  },
  {
    name: "French",
    code: "fr",
  },
  {
    name: "Turkish",
    code: "tr",
  },
  {
    name: "German",
    code: "de",
  },
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "Persian",
    code: "fa",
  },
  {
    name: "Urdu",
    code: "ur",
  },
  {
    name: "Punjabi",
    code: "pa",
  },
  {
    name: "Vietnamese",
    code: "vi",
  },
  {
    name: "Indonesian",
    code: "id",
  },
  {
    name: "Korean",
    code: "ko",
  },
  {
    name: "Telugu",
    code: "te",
  },
  {
    name: "Marathi",
    code: "mr",
  },
  {
    name: "Italian",
    code: "it",
  },
  {
    name: "Thai",
    code: "th",
  },
  {
    name: "Burmese",
    code: "my",
  },
  {
    name: "Kannada",
    code: "kn",
  },
  {
    name: "Gujarati",
    code: "gu",
  },
  {
    name: "Polish",
    code: "pl",
  },
  {
    name: "Afrikaans",
    code: "af",
  },
  {
    name: "Afrikaans (Namibia)",
    code: "af-NA",
  },
  {
    name: "Afrikaans (South Africa)",
    code: "af-ZA",
  },
  {
    name: "Aghem",
    code: "agq",
  },
  {
    name: "Aghem (Cameroon)",
    code: "agq-CM",
  },
  {
    name: "Akan",
    code: "ak",
  },
  {
    name: "Akan (Ghana)",
    code: "ak-GH",
  },
  {
    name: "Albanian",
    code: "sq",
  },
  {
    name: "Albanian (Albania)",
    code: "sq-AL",
  },
  {
    name: "Amharic",
    code: "am",
  },
  {
    name: "Amharic (Ethiopia)",
    code: "am-ET",
  },
  {
    name: "Arabic (Algeria)",
    code: "ar-DZ",
  },
  {
    name: "Arabic (Bahrain)",
    code: "ar-BH",
  },
  {
    name: "Arabic (Egypt)",
    code: "ar-EG",
  },
  {
    name: "Arabic (Iraq)",
    code: "ar-IQ",
  },
  {
    name: "Arabic (Jordan)",
    code: "ar-JO",
  },
  {
    name: "Arabic (Kuwait)",
    code: "ar-KW",
  },
  {
    name: "Arabic (Lebanon)",
    code: "ar-LB",
  },
  {
    name: "Arabic (Libya)",
    code: "ar-LY",
  },
  {
    name: "Arabic (Morocco)",
    code: "ar-MA",
  },
  {
    name: "Arabic (Oman)",
    code: "ar-OM",
  },
  {
    name: "Arabic (Qatar)",
    code: "ar-QA",
  },
  {
    name: "Arabic (Saudi Arabia)",
    code: "ar-SA",
  },
  {
    name: "Arabic (Sudan)",
    code: "ar-SD",
  },
  {
    name: "Arabic (Syria)",
    code: "ar-SY",
  },
  {
    name: "Arabic (Tunisia)",
    code: "ar-TN",
  },
  {
    name: "Arabic (United Arab Emirates)",
    code: "ar-AE",
  },
  {
    name: "Arabic (Yemen)",
    code: "ar-YE",
  },
  {
    name: "Arabic (World)",
    code: "ar-001",
  },
  {
    name: "Armenian",
    code: "hy",
  },
  {
    name: "Armenian (Armenia)",
    code: "hy-AM",
  },
  {
    name: "Assamese",
    code: "as",
  },
  {
    name: "Assamese (India)",
    code: "as-IN",
  },
  {
    name: "Asu",
    code: "asa",
  },
  {
    name: "Asu (Tanzania)",
    code: "asa-TZ",
  },
  {
    name: "Azerbaijani",
    code: "az",
  },
  {
    name: "Azerbaijani (Cyrillic)",
    code: "az-Cyrl",
  },
  {
    name: "Azerbaijani (Cyrillic, Azerbaijan)",
    code: "az-Cyrl-AZ",
  },
  {
    name: "Azerbaijani (Latin)",
    code: "az-Latn",
  },
  {
    name: "Azerbaijani (Latin, Azerbaijan)",
    code: "az-Latn-AZ",
  },
  {
    name: "Bafia",
    code: "ksf",
  },
  {
    name: "Bafia (Cameroon)",
    code: "ksf-CM",
  },
  {
    name: "Bambara",
    code: "bm",
  },
  {
    name: "Bambara (Mali)",
    code: "bm-ML",
  },
  {
    name: "Basaa",
    code: "bas",
  },
  {
    name: "Basaa (Cameroon)",
    code: "bas-CM",
  },
  {
    name: "Basque",
    code: "eu",
  },
  {
    name: "Basque (Spain)",
    code: "eu-ES",
  },
  {
    name: "Belarusian",
    code: "be",
  },
  {
    name: "Belarusian (Belarus)",
    code: "be-BY",
  },
  {
    name: "Bemba",
    code: "bem",
  },
  {
    name: "Bemba (Zambia)",
    code: "bem-ZM",
  },
  {
    name: "Bena",
    code: "bez",
  },
  {
    name: "Bena (Tanzania)",
    code: "bez-TZ",
  },
  {
    name: "Bengali (Bangladesh)",
    code: "bn-BD",
  },
  {
    name: "Bengali (India)",
    code: "bn-IN",
  },
  {
    name: "Bodo",
    code: "brx",
  },
  {
    name: "Bodo (India)",
    code: "brx-IN",
  },
  {
    name: "Bosnian",
    code: "bs",
  },
  {
    name: "Bosnian (Bosnia and Herzegovina)",
    code: "bs-BA",
  },
  {
    name: "Breton",
    code: "br",
  },
  {
    name: "Breton (France)",
    code: "br-FR",
  },
  {
    name: "Bulgarian",
    code: "bg",
  },
  {
    name: "Bulgarian (Bulgaria)",
    code: "bg-BG",
  },
  {
    name: "Burmese (Myanmar [Burma])",
    code: "my-MM",
  },
  {
    name: "Catalan",
    code: "ca",
  },
  {
    name: "Catalan (Spain)",
    code: "ca-ES",
  },
  {
    name: "Central Kurdish",
    code: "ckb",
  },
  {
    name: "Central Morocco Tamazight",
    code: "tzm",
  },
  {
    name: "Central Morocco Tamazight (Latin)",
    code: "tzm-Latn",
  },
  {
    name: "Central Morocco Tamazight (Latin, Morocco)",
    code: "tzm-Latn-MA",
  },
  {
    name: "Cherokee",
    code: "chr",
  },
  {
    name: "Cherokee (United States)",
    code: "chr-US",
  },
  {
    name: "Chiga",
    code: "cgg",
  },
  {
    name: "Chiga (Uganda)",
    code: "cgg-UG",
  },
  {
    name: "Chinese (Simplified, China)",
    code: "zh-CN",
  },
  {
    name: "Chinese (Simplified)",
    code: "zh-Hans",
  },
  {
    name: "Chinese (Simplified, China)",
    code: "zh-Hans-CN",
  },
  {
    name: "Chinese (Simplified, Hong Kong SAR China)",
    code: "zh-Hans-HK",
  },
  {
    name: "Chinese (Simplified, Macau SAR China)",
    code: "zh-Hans-MO",
  },
  {
    name: "Chinese (Simplified, Singapore)",
    code: "zh-Hans-SG",
  },
  {
    name: "Chinese (Traditional)",
    code: "zh-Hant",
  },
  {
    name: "Chinese (Traditional, Hong Kong SAR China)",
    code: "zh-Hant-HK",
  },
  {
    name: "Chinese (Traditional, Macau SAR China)",
    code: "zh-Hant-MO",
  },
  {
    name: "Chinese (Traditional, Taiwan)",
    code: "zh-Hant-TW",
  },
  {
    name: "Congo Swahili",
    code: "swc",
  },
  {
    name: "Congo Swahili (Congo - Kinshasa)",
    code: "swc-CD",
  },
  {
    name: "Cornish",
    code: "kw",
  },
  {
    name: "Cornish (United Kingdom)",
    code: "kw-GB",
  },
  {
    name: "Croatian",
    code: "hr",
  },
  {
    name: "Croatian (Croatia)",
    code: "hr-HR",
  },
  {
    name: "Czech",
    code: "cs",
  },
  {
    name: "Czech (Czech Republic)",
    code: "cs-CZ",
  },
  {
    name: "Danish",
    code: "da",
  },
  {
    name: "Danish (Denmark)",
    code: "da-DK",
  },
  {
    name: "Duala",
    code: "dua",
  },
  {
    name: "Duala (Cameroon)",
    code: "dua-CM",
  },
  {
    name: "Dutch",
    code: "nl",
  },
  {
    name: "Dutch (Aruba)",
    code: "nl-AW",
  },
  {
    name: "Dutch (Belgium)",
    code: "nl-BE",
  },
  {
    name: "Dutch (CuraÃ§ao)",
    code: "nl-CW",
  },
  {
    name: "Dutch (Netherlands)",
    code: "nl-NL",
  },
  {
    name: "Dutch (Sint Maarten)",
    code: "nl-SX",
  },
  {
    name: "Embu",
    code: "ebu",
  },
  {
    name: "Embu (Kenya)",
    code: "ebu-KE",
  },
  {
    name: "English (American Samoa)",
    code: "en-AS",
  },
  {
    name: "English (Australia)",
    code: "en-AU",
  },
  {
    name: "English (Bahamas)",
    code: "en-BS",
  },
  {
    name: "English (Barbados)",
    code: "en-BB",
  },
  {
    name: "English (Belgium)",
    code: "en-BE",
  },
  {
    name: "English (Belize)",
    code: "en-BZ",
  },
  {
    name: "English (Bermuda)",
    code: "en-BM",
  },
  {
    name: "English (Botswana)",
    code: "en-BW",
  },
  {
    name: "English (Canada)",
    code: "en-CA",
  },
  {
    name: "English (Egypt)",
    code: "en-EG",
  },
  {
    name: "English (Europe)",
    code: "en-EU",
  },
  {
    name: "English (Guam)",
    code: "en-GU",
  },
  {
    name: "English (Guyana)",
    code: "en-GY",
  },
  {
    name: "English (Hong Kong SAR China)",
    code: "en-HK",
  },
  {
    name: "English (India)",
    code: "en-IN",
  },
  {
    name: "English (Ireland)",
    code: "en-IE",
  },
  {
    name: "English (Jamaica)",
    code: "en-JM",
  },
  {
    name: "English (Malta)",
    code: "en-MT",
  },
  {
    name: "English (Marshall Islands)",
    code: "en-MH",
  },
  {
    name: "English (Mauritius)",
    code: "en-MU",
  },
  {
    name: "English (Namibia)",
    code: "en-NA",
  },
  {
    name: "English (New Zealand)",
    code: "en-NZ",
  },
  {
    name: "English (Northern Mariana Islands)",
    code: "en-MP",
  },
  {
    name: "English (Pakistan)",
    code: "en-PK",
  },
  {
    name: "English (Philippines)",
    code: "en-PH",
  },
  {
    name: "English (Saudi Arabia)",
    code: "en-SA",
  },
  {
    name: "English (Singapore)",
    code: "en-SG",
  },
  {
    name: "English (South Africa)",
    code: "en-ZA",
  },
  {
    name: "English (Switzerland)",
    code: "en-CH",
  },
  {
    name: "English (Trinidad and Tobago)",
    code: "en-TT",
  },
  {
    name: "English (U.S. Minor Outlying Islands)",
    code: "en-UM",
  },
  {
    name: "English (U.S. Virgin Islands)",
    code: "en-VI",
  },
  {
    name: "English (U.A.E.)",
    code: "en-AE",
  },
  {
    name: "English (United Kingdom)",
    code: "en-GB",
  },
  {
    name: "English (United States)",
    code: "en-US",
  },
  {
    name: "English (Zimbabwe)",
    code: "en-ZW",
  },
  {
    name: "Esperanto",
    code: "eo",
  },
  {
    name: "Estonian",
    code: "et",
  },
  {
    name: "Estonian (Estonia)",
    code: "et-EE",
  },
  {
    name: "Ewe",
    code: "ee",
  },
  {
    name: "Ewe (Ghana)",
    code: "ee-GH",
  },
  {
    name: "Ewe (Togo)",
    code: "ee-TG",
  },
  {
    name: "Ewondo",
    code: "ewo",
  },
  {
    name: "Ewondo (Cameroon)",
    code: "ewo-CM",
  },
  {
    name: "Faroese",
    code: "fo",
  },
  {
    name: "Faroese (Faroe Islands)",
    code: "fo-FO",
  },
  {
    name: "Filipino",
    code: "fil",
  },
  {
    name: "Filipino (Philippines)",
    code: "fil-PH",
  },
  {
    name: "Finnish",
    code: "fi",
  },
  {
    name: "Finnish (Finland)",
    code: "fi-FI",
  },
  {
    name: "French (Belgium)",
    code: "fr-BE",
  },
  {
    name: "French (Benin)",
    code: "fr-BJ",
  },
  {
    name: "French (Burkina Faso)",
    code: "fr-BF",
  },
  {
    name: "French (Burundi)",
    code: "fr-BI",
  },
  {
    name: "French (Cameroon)",
    code: "fr-CM",
  },
  {
    name: "French (Canada)",
    code: "fr-CA",
  },
  {
    name: "French (Central African Republic)",
    code: "fr-CF",
  },
  {
    name: "French (Chad)",
    code: "fr-TD",
  },
  {
    name: "French (Comoros)",
    code: "fr-KM",
  },
  {
    name: "French (Congo - Brazzaville)",
    code: "fr-CG",
  },
  {
    name: "French (Congo - Kinshasa)",
    code: "fr-CD",
  },
  {
    name: "French (Côte d’Ivoire)",
    code: "fr-CI",
  },
  {
    name: "French (Djibouti)",
    code: "fr-DJ",
  },
  {
    name: "French (Equatorial Guinea)",
    code: "fr-GQ",
  },
  {
    name: "French (France)",
    code: "fr-FR",
  },
  {
    name: "French (French Guiana)",
    code: "fr-GF",
  },
  {
    name: "French (Gabon)",
    code: "fr-GA",
  },
  {
    name: "French (Guadeloupe)",
    code: "fr-GP",
  },
  {
    name: "French (Guinea)",
    code: "fr-GN",
  },
  {
    name: "French (Luxembourg)",
    code: "fr-LU",
  },
  {
    name: "French (Madagascar)",
    code: "fr-MG",
  },
  {
    name: "French (Mali)",
    code: "fr-ML",
  },
  {
    name: "French (Martinique)",
    code: "fr-MQ",
  },
  {
    name: "French (Mayotte)",
    code: "fr-YT",
  },
  {
    name: "French (Monaco)",
    code: "fr-MC",
  },
  {
    name: "French (Niger)",
    code: "fr-NE",
  },
  {
    name: "French (Rwanda)",
    code: "fr-RW",
  },
  {
    name: "French (Réunion)",
    code: "fr-RE",
  },
  {
    name: "French (Saint Barthélemy)",
    code: "fr-BL",
  },
  {
    name: "French (Saint Martin)",
    code: "fr-MF",
  },
  {
    name: "French (Senegal)",
    code: "fr-SN",
  },
  {
    name: "French (Switzerland)",
    code: "fr-CH",
  },
  {
    name: "French (Togo)",
    code: "fr-TG",
  },
  {
    name: "Fulah",
    code: "ff",
  },
  {
    name: "Fulah (Senegal)",
    code: "ff-SN",
  },
  {
    name: "Galician",
    code: "gl",
  },
  {
    name: "Galician (Spain)",
    code: "gl-ES",
  },
  {
    name: "Ganda",
    code: "lg",
  },
  {
    name: "Ganda (Uganda)",
    code: "lg-UG",
  },
  {
    name: "Georgian",
    code: "ka",
  },
  {
    name: "Georgian (Georgia)",
    code: "ka-GE",
  },
  {
    name: "German (Austria)",
    code: "de-AT",
  },
  {
    name: "German (Belgium)",
    code: "de-BE",
  },
  {
    name: "German (Germany)",
    code: "de-DE",
  },
  {
    name: "German (Liechtenstein)",
    code: "de-LI",
  },
  {
    name: "German (Luxembourg)",
    code: "de-LU",
  },
  {
    name: "German (Switzerland)",
    code: "de-CH",
  },
  {
    name: "Greek",
    code: "el",
  },
  {
    name: "Greek (Cyprus)",
    code: "el-CY",
  },
  {
    name: "Greek (Greece)",
    code: "el-GR",
  },
  {
    name: "Gujarati (India)",
    code: "gu-IN",
  },
  {
    name: "Gusii",
    code: "guz",
  },
  {
    name: "Gusii (Kenya)",
    code: "guz-KE",
  },
  {
    name: "Hausa",
    code: "ha",
  },
  {
    name: "Hausa (Latin)",
    code: "ha-Latn",
  },
  {
    name: "Hausa (Latin, Ghana)",
    code: "ha-Latn-GH",
  },
  {
    name: "Hausa (Latin, Niger)",
    code: "ha-Latn-NE",
  },
  {
    name: "Hausa (Latin, Nigeria)",
    code: "ha-Latn-NG",
  },
  {
    name: "Hawaiian",
    code: "haw",
  },
  {
    name: "Hawaiian (United States)",
    code: "haw-US",
  },
  {
    name: "Hebrew",
    code: "he",
  },
  {
    name: "Hebrew (Israel)",
    code: "he-IL",
  },
  {
    name: "Hindi (India)",
    code: "hi-IN",
  },
  {
    name: "Hungarian",
    code: "hu",
  },
  {
    name: "Hungarian (Hungary)",
    code: "hu-HU",
  },
  {
    name: "Icelandic",
    code: "is",
  },
  {
    name: "Icelandic (Iceland)",
    code: "is-IS",
  },
  {
    name: "Igbo",
    code: "ig",
  },
  {
    name: "Igbo (Nigeria)",
    code: "ig-NG",
  },
  {
    name: "Indonesian (Indonesia)",
    code: "id-ID",
  },
  {
    name: "Irish",
    code: "ga",
  },
  {
    name: "Irish (Ireland)",
    code: "ga-IE",
  },
  {
    name: "Italian (Italy)",
    code: "it-IT",
  },
  {
    name: "Italian (Switzerland)",
    code: "it-CH",
  },
  {
    name: "Japanese (Japan)",
    code: "ja-JP",
  },
  {
    name: "Jola-Fonyi",
    code: "dyo",
  },
  {
    name: "Jola-Fonyi (Senegal)",
    code: "dyo-SN",
  },
  {
    name: "Kabuverdianu",
    code: "kea",
  },
  {
    name: "Kabuverdianu (Cape Verde)",
    code: "kea-CV",
  },
  {
    name: "Kabyle",
    code: "kab",
  },
  {
    name: "Kabyle (Algeria)",
    code: "kab-DZ",
  },
  {
    name: "Kalaallisut",
    code: "kl",
  },
  {
    name: "Kalaallisut (Greenland)",
    code: "kl-GL",
  },
  {
    name: "Kalenjin",
    code: "kln",
  },
  {
    name: "Kalenjin (Kenya)",
    code: "kln-KE",
  },
  {
    name: "Kamba",
    code: "kam",
  },
  {
    name: "Kamba (Kenya)",
    code: "kam-KE",
  },
  {
    name: "Kannada (India)",
    code: "kn-IN",
  },
  {
    name: "Kazakh",
    code: "kk",
  },
  {
    name: "Kazakh (Cyrillic)",
    code: "kk-Cyrl",
  },
  {
    name: "Kazakh (Cyrillic, Kazakhstan)",
    code: "kk-Cyrl-KZ",
  },
  {
    name: "Khmer",
    code: "km",
  },
  {
    name: "Khmer (Cambodia)",
    code: "km-KH",
  },
  {
    name: "Kikuyu",
    code: "ki",
  },
  {
    name: "Kikuyu (Kenya)",
    code: "ki-KE",
  },
  {
    name: "Kinyarwanda",
    code: "rw",
  },
  {
    name: "Kinyarwanda (Rwanda)",
    code: "rw-RW",
  },
  {
    name: "Konkani",
    code: "kok",
  },
  {
    name: "Konkani (India)",
    code: "kok-IN",
  },
  {
    name: "Korean (South Korea)",
    code: "ko-KR",
  },
  {
    name: "Koyra Chiini",
    code: "khq",
  },
  {
    name: "Koyra Chiini (Mali)",
    code: "khq-ML",
  },
  {
    name: "Koyraboro Senni",
    code: "ses",
  },
  {
    name: "Koyraboro Senni (Mali)",
    code: "ses-ML",
  },
  {
    name: "Kwasio",
    code: "nmg",
  },
  {
    name: "Kwasio (Cameroon)",
    code: "nmg-CM",
  },
  {
    name: "Langi",
    code: "lag",
  },
  {
    name: "Langi (Tanzania)",
    code: "lag-TZ",
  },
  {
    name: "Latvian",
    code: "lv",
  },
  {
    name: "Latvian (Latvia)",
    code: "lv-LV",
  },
  {
    name: "Lingala",
    code: "ln",
  },
  {
    name: "Lingala (Congo - Brazzaville)",
    code: "ln-CG",
  },
  {
    name: "Lingala (Congo - Kinshasa)",
    code: "ln-CD",
  },
  {
    name: "Lithuanian",
    code: "lt",
  },
  {
    name: "Lithuanian (Lithuania)",
    code: "lt-LT",
  },
  {
    name: "Luba-Katanga",
    code: "lu",
  },
  {
    name: "Luba-Katanga (Congo - Kinshasa)",
    code: "lu-CD",
  },
  {
    name: "Luo",
    code: "luo",
  },
  {
    name: "Luo (Kenya)",
    code: "luo-KE",
  },
  {
    name: "Luyia",
    code: "luy",
  },
  {
    name: "Luyia (Kenya)",
    code: "luy-KE",
  },
  {
    name: "Macedonian",
    code: "mk",
  },
  {
    name: "Macedonian (Macedonia)",
    code: "mk-MK",
  },
  {
    name: "Machame",
    code: "jmc",
  },
  {
    name: "Machame (Tanzania)",
    code: "jmc-TZ",
  },
  {
    name: "Makhuwa-Meetto",
    code: "mgh",
  },
  {
    name: "Makhuwa-Meetto (Mozambique)",
    code: "mgh-MZ",
  },
  {
    name: "Makonde",
    code: "kde",
  },
  {
    name: "Makonde (Tanzania)",
    code: "kde-TZ",
  },
  {
    name: "Malagasy",
    code: "mg",
  },
  {
    name: "Malagasy (Madagascar)",
    code: "mg-MG",
  },
  {
    name: "Malay (Brunei)",
    code: "ms-BN",
  },
  {
    name: "Malay (Malaysia)",
    code: "ms-MY",
  },
  {
    name: "Malayalam",
    code: "ml",
  },
  {
    name: "Malayalam (India)",
    code: "ml-IN",
  },
  {
    name: "Maltese",
    code: "mt",
  },
  {
    name: "Maltese (Malta)",
    code: "mt-MT",
  },
  {
    name: "Manx",
    code: "gv",
  },
  {
    name: "Manx (United Kingdom)",
    code: "gv-GB",
  },
  {
    name: "Marathi (India)",
    code: "mr-IN",
  },
  {
    name: "Masai",
    code: "mas",
  },
  {
    name: "Masai (Kenya)",
    code: "mas-KE",
  },
  {
    name: "Masai (Tanzania)",
    code: "mas-TZ",
  },
  {
    name: "Meru",
    code: "mer",
  },
  {
    name: "Meru (Kenya)",
    code: "mer-KE",
  },
  {
    name: "Morisyen",
    code: "mfe",
  },
  {
    name: "Morisyen (Mauritius)",
    code: "mfe-MU",
  },
  {
    name: "Mundang",
    code: "mua",
  },
  {
    name: "Mundang (Cameroon)",
    code: "mua-CM",
  },
  {
    name: "Nama",
    code: "naq",
  },
  {
    name: "Nama (Namibia)",
    code: "naq-NA",
  },
  {
    name: "Nepali",
    code: "ne",
  },
  {
    name: "Nepali (India)",
    code: "ne-IN",
  },
  {
    name: "Nepali (Nepal)",
    code: "ne-NP",
  },
  {
    name: "North Ndebele",
    code: "nd",
  },
  {
    name: "North Ndebele (Zimbabwe)",
    code: "nd-ZW",
  },
  {
    name: "Norwegian Bokmål",
    code: "nb",
  },
  {
    name: "Norwegian Bokmål (Norway)",
    code: "nb-NO",
  },
  {
    name: "Norwegian Nynorsk",
    code: "nn",
  },
  {
    name: "Norwegian Nynorsk (Norway)",
    code: "nn-NO",
  },
  {
    name: "Nuer",
    code: "nus",
  },
  {
    name: "Nuer (Sudan)",
    code: "nus-SD",
  },
  {
    name: "Nyankole",
    code: "nyn",
  },
  {
    name: "Nyankole (Uganda)",
    code: "nyn-UG",
  },
  {
    name: "Oriya",
    code: "or",
  },
  {
    name: "Oriya (India)",
    code: "or-IN",
  },
  {
    name: "Oromo",
    code: "om",
  },
  {
    name: "Oromo (Ethiopia)",
    code: "om-ET",
  },
  {
    name: "Oromo (Kenya)",
    code: "om-KE",
  },
  {
    name: "Pashto",
    code: "ps",
  },
  {
    name: "Pashto (Afghanistan)",
    code: "ps-AF",
  },
  {
    name: "Persian (Afghanistan)",
    code: "fa-AF",
  },
  {
    name: "Persian (Iran)",
    code: "fa-IR",
  },
  {
    name: "Polish (Poland)",
    code: "pl-PL",
  },
  {
    name: "Portuguese (Angola)",
    code: "pt-AO",
  },
  {
    name: "Portuguese (Brazil)",
    code: "pt-BR",
  },
  {
    name: "Portuguese (Guinea-Bissau)",
    code: "pt-GW",
  },
  {
    name: "Portuguese (Mozambique)",
    code: "pt-MZ",
  },
  {
    name: "Portuguese (Portugal)",
    code: "pt-PT",
  },
  {
    name: "Portuguese (São Tomé and Príncipe)",
    code: "pt-ST",
  },
  {
    name: "Punjabi (Arabic)",
    code: "pa-Arab",
  },
  {
    name: "Punjabi (Arabic, Pakistan)",
    code: "pa-Arab-PK",
  },
  {
    name: "Punjabi (Gurmukhi)",
    code: "pa-Guru",
  },
  {
    name: "Punjabi (Gurmukhi, India)",
    code: "pa-Guru-IN",
  },
  {
    name: "Romanian",
    code: "ro",
  },
  {
    name: "Romanian (Moldova)",
    code: "ro-MD",
  },
  {
    name: "Romanian (Romania)",
    code: "ro-RO",
  },
  {
    name: "Romansh",
    code: "rm",
  },
  {
    name: "Romansh (Switzerland)",
    code: "rm-CH",
  },
  {
    name: "Rombo",
    code: "rof",
  },
  {
    name: "Rombo (Tanzania)",
    code: "rof-TZ",
  },
  {
    name: "Rundi",
    code: "rn",
  },
  {
    name: "Rundi (Burundi)",
    code: "rn-BI",
  },
  {
    name: "Russian (Moldova)",
    code: "ru-MD",
  },
  {
    name: "Russian (Russia)",
    code: "ru-RU",
  },
  {
    name: "Russian (Ukraine)",
    code: "ru-UA",
  },
  {
    name: "Rwa",
    code: "rwk",
  },
  {
    name: "Rwa (Tanzania)",
    code: "rwk-TZ",
  },
  {
    name: "Samburu",
    code: "saq",
  },
  {
    name: "Samburu (Kenya)",
    code: "saq-KE",
  },
  {
    name: "Sango",
    code: "sg",
  },
  {
    name: "Sango (Central African Republic)",
    code: "sg-CF",
  },
  {
    name: "Sangu",
    code: "sbp",
  },
  {
    name: "Sangu (Tanzania)",
    code: "sbp-TZ",
  },
  {
    name: "Sena",
    code: "seh",
  },
  {
    name: "Sena (Mozambique)",
    code: "seh-MZ",
  },
  {
    name: "Serbian",
    code: "sr",
  },
  {
    name: "Serbian (Cyrillic)",
    code: "sr-Cyrl",
  },
  {
    name: "Serbian (Cyrillic, Bosnia and Herzegovina)",
    code: "sr-Cyrl-BA",
  },
  {
    name: "Serbian (Cyrillic, Montenegro)",
    code: "sr-Cyrl-ME",
  },
  {
    name: "Serbian (Cyrillic, Serbia)",
    code: "sr-Cyrl-RS",
  },
  {
    name: "Serbian (Latin)",
    code: "sr-Latn",
  },
  {
    name: "Serbian (Latin, Bosnia and Herzegovina)",
    code: "sr-Latn-BA",
  },
  {
    name: "Serbian (Latin, Montenegro)",
    code: "sr-Latn-ME",
  },
  {
    name: "Serbian (Latin, Serbia)",
    code: "sr-Latn-RS",
  },
  {
    name: "Shambala",
    code: "ksb",
  },
  {
    name: "Shambala (Tanzania)",
    code: "ksb-TZ",
  },
  {
    name: "Shona",
    code: "sn",
  },
  {
    name: "Shona (Zimbabwe)",
    code: "sn-ZW",
  },
  {
    name: "Sichuan Yi",
    code: "ii",
  },
  {
    name: "Sichuan Yi (China)",
    code: "ii-CN",
  },
  {
    name: "Sinhala",
    code: "si",
  },
  {
    name: "Sinhala (Sri Lanka)",
    code: "si-LK",
  },
  {
    name: "Slovak",
    code: "sk",
  },
  {
    name: "Slovak (Slovakia)",
    code: "sk-SK",
  },
  {
    name: "Slovenian",
    code: "sl",
  },
  {
    name: "Slovenian (Slovenia)",
    code: "sl-SI",
  },
  {
    name: "Soga",
    code: "xog",
  },
  {
    name: "Soga (Uganda)",
    code: "xog-UG",
  },
  {
    name: "Somali",
    code: "so",
  },
  {
    name: "Somali (Djibouti)",
    code: "so-DJ",
  },
  {
    name: "Somali (Ethiopia)",
    code: "so-ET",
  },
  {
    name: "Somali (Kenya)",
    code: "so-KE",
  },
  {
    name: "Somali (Somalia)",
    code: "so-SO",
  },
  {
    name: "Spanish (Argentina)",
    code: "es-AR",
  },
  {
    name: "Spanish (Bolivia)",
    code: "es-BO",
  },
  {
    name: "Spanish (Chile)",
    code: "es-CL",
  },
  {
    name: "Spanish (Colombia)",
    code: "es-CO",
  },
  {
    name: "Spanish (Costa Rica)",
    code: "es-CR",
  },
  {
    name: "Spanish (Dominican Republic)",
    code: "es-DO",
  },
  {
    name: "Spanish (Ecuador)",
    code: "es-EC",
  },
  {
    name: "Spanish (El Salvador)",
    code: "es-SV",
  },
  {
    name: "Spanish (Equatorial Guinea)",
    code: "es-GQ",
  },
  {
    name: "Spanish (Guatemala)",
    code: "es-GT",
  },
  {
    name: "Spanish (Honduras)",
    code: "es-HN",
  },
  {
    name: "Spanish (Latin America)",
    code: "es-419",
  },
  {
    name: "Spanish (Mexico)",
    code: "es-MX",
  },
  {
    name: "Spanish (Nicaragua)",
    code: "es-NI",
  },
  {
    name: "Spanish (Panama)",
    code: "es-PA",
  },
  {
    name: "Spanish (Paraguay)",
    code: "es-PY",
  },
  {
    name: "Spanish (Peru)",
    code: "es-PE",
  },
  {
    name: "Spanish (Puerto Rico)",
    code: "es-PR",
  },
  {
    name: "Spanish (Spain)",
    code: "es-ES",
  },
  {
    name: "Spanish (United States)",
    code: "es-US",
  },
  {
    name: "Spanish (Uruguay)",
    code: "es-UY",
  },
  {
    name: "Spanish (Venezuela)",
    code: "es-VE",
  },
  {
    name: "Swahili",
    code: "sw",
  },
  {
    name: "Swahili (Kenya)",
    code: "sw-KE",
  },
  {
    name: "Swahili (Tanzania)",
    code: "sw-TZ",
  },
  {
    name: "Swedish",
    code: "sv",
  },
  {
    name: "Swedish (Finland)",
    code: "sv-FI",
  },
  {
    name: "Swedish (Sweden)",
    code: "sv-SE",
  },
  {
    name: "Swiss German",
    code: "gsw",
  },
  {
    name: "Swiss German (Switzerland)",
    code: "gsw-CH",
  },
  {
    name: "Tachelhit",
    code: "shi",
  },
  {
    name: "Tachelhit (Latin)",
    code: "shi-Latn",
  },
  {
    name: "Tachelhit (Latin, Morocco)",
    code: "shi-Latn-MA",
  },
  {
    name: "Tachelhit (Tifinagh)",
    code: "shi-Tfng",
  },
  {
    name: "Tachelhit (Tifinagh, Morocco)",
    code: "shi-Tfng-MA",
  },
  {
    name: "Taita",
    code: "dav",
  },
  {
    name: "Taita (Kenya)",
    code: "dav-KE",
  },
  {
    name: "Tamil",
    code: "ta",
  },
  {
    name: "Tamil (India)",
    code: "ta-IN",
  },
  {
    name: "Tamil (Sri Lanka)",
    code: "ta-LK",
  },
  {
    name: "Tasawaq",
    code: "twq",
  },
  {
    name: "Tasawaq (Niger)",
    code: "twq-NE",
  },
  {
    name: "Telugu (India)",
    code: "te-IN",
  },
  {
    name: "Teso",
    code: "teo",
  },
  {
    name: "Teso (Kenya)",
    code: "teo-KE",
  },
  {
    name: "Teso (Uganda)",
    code: "teo-UG",
  },
  {
    name: "Thai (Thailand)",
    code: "th-TH",
  },
  {
    name: "Tibetan",
    code: "bo",
  },
  {
    name: "Tibetan (China)",
    code: "bo-CN",
  },
  {
    name: "Tibetan (India)",
    code: "bo-IN",
  },
  {
    name: "Tigrinya",
    code: "ti",
  },
  {
    name: "Tigrinya (Eritrea)",
    code: "ti-ER",
  },
  {
    name: "Tigrinya (Ethiopia)",
    code: "ti-ET",
  },
  {
    name: "Tongan",
    code: "to",
  },
  {
    name: "Tongan (Tonga)",
    code: "to-TO",
  },
  {
    name: "Turkish (Turkey)",
    code: "tr-TR",
  },
  {
    name: "Ukrainian",
    code: "uk",
  },
  {
    name: "Ukrainian (Ukraine)",
    code: "uk-UA",
  },
  {
    name: "Urdu (India)",
    code: "ur-IN",
  },
  {
    name: "Urdu (Pakistan)",
    code: "ur-PK",
  },
  {
    name: "Uzbek",
    code: "uz",
  },
  {
    name: "Uzbek (Arabic)",
    code: "uz-Arab",
  },
  {
    name: "Uzbek (Arabic, Afghanistan)",
    code: "uz-Arab-AF",
  },
  {
    name: "Uzbek (Cyrillic)",
    code: "uz-Cyrl",
  },
  {
    name: "Uzbek (Cyrillic, Uzbekistan)",
    code: "uz-Cyrl-UZ",
  },
  {
    name: "Uzbek (Latin)",
    code: "uz-Latn",
  },
  {
    name: "Uzbek (Latin, Uzbekistan)",
    code: "uz-Latn-UZ",
  },
  {
    name: "Vai",
    code: "vai",
  },
  {
    name: "Vai (Latin)",
    code: "vai-Latn",
  },
  {
    name: "Vai (Latin, Liberia)",
    code: "vai-Latn-LR",
  },
  {
    name: "Vai (Vai)",
    code: "vai-Vaii",
  },
  {
    name: "Vai (Vai, Liberia)",
    code: "vai-Vaii-LR",
  },
  {
    name: "Vietnamese (Vietnam)",
    code: "vi-VN",
  },
  {
    name: "Vunjo",
    code: "vun",
  },
  {
    name: "Vunjo (Tanzania)",
    code: "vun-TZ",
  },
  {
    name: "Welsh",
    code: "cy",
  },
  {
    name: "Welsh (United Kingdom)",
    code: "cy-GB",
  },
  {
    name: "Yangben",
    code: "yav",
  },
  {
    name: "Yangben (Cameroon)",
    code: "yav-CM",
  },
  {
    name: "Yoruba",
    code: "yo",
  },
  {
    name: "Yoruba (Nigeria)",
    code: "yo-NG",
  },
  {
    name: "Zarma",
    code: "dje",
  },
  {
    name: "Zarma (Niger)",
    code: "dje-NE",
  },
  {
    name: "Zulu",
    code: "zu",
  },
  {
    name: "Zulu (South Africa)",
    code: "zu-ZA",
  },
  {
    name: "Afar",
    code: "aa",
  },
  {
    name: "Chechen",
    code: "ce",
  },
  {
    name: "Kirghiz",
    code: "ky",
  },
  {
    name: "Maori",
    code: "mi",
  },
  {
    name: "Norwegian",
    code: "no",
  },
  {
    name: "Uighur",
    code: "ug",
  },
  {
    name: "Walloon",
    code: "wa",
  },
];
export default languages;
