// ██████ Integrations █████████████████████████████████████████████████████████

// This stuff is broken and unfinished Idk why it's even here, but if you do, lmk - pinkcig

const express 		= require( "express" )
    , bodyParser 	= require( "body-parser" )
    , app 			= express();

require( "body-parser-xml" )( bodyParser );

// ██████ | ███████████████████████████████████████████████████████████████████

module.exports = async ( client ) => {

	app.get( "/subYb", ({ query: { 'hub.challenge': challenge } }, res) => {
		console.log(challenge);
		res.status(200).end(challenge)
	});

	app.post( "/subYb", bodyParser.xml(), async ({ body: { feed } }, res) => {

		res.status( 204 ).end();

		console.log( feed );

	});

	// app.listen( 5000 );


	// console.log(" listen —— OK ");

}













// const URL = [
// "UCC4zYGZpNuuUYSZ2uEg6Qog",
// "UCpDWmApl_7s1Uj3OuInPS6Q",
// "UCj0oAZOzusaJA2zAfBOeLvA",
// "UCqEpOBfQuPjUYwBVQj3_w9A",
// "UCteMJzhMoMh1-WN6d2u6NEg",
// "UClcbzoUf3bC2ZTqM-DNXojA",
// "UCNHJx9DAOrdwt8Ihj05PBsA",
// "UCMq2RaXFCHcY7wQEVeFmYEw",
// "UC1nstSui0tPnJtMF2OZx5tw",
// "UCxaf-hhRLsrBVkvYvL-iwfg",
// "UCacY6C1c_0tBGGkyCNciDSQ",
// "UCBCIyG-J_go96a7h0hzAlkQ",
// "UCYVfrxzIR50NKLwUZbsEXFg",
// "UC4ZmXOYOAJ9TEpNb1QgDarg",
// "UCT5ij7sXeJnMPbNyXiktjvw",
// "UC5MJSLbKFTL-X-DUTo0ELMQ",
// "UCZKIl_Otvu00babkH-L9o2A",
// "UC747jKzLEi29YDCChrsdF6A",
// "UCVuU4GhdaQlgogf4kB1d5eg",
// "UCSCRpPOOmFaKTbVAt6S7Tew",
// "UCNcBCyb3JUiLXXE3q-31YAA",
// "UCSbMmk0aAHHLsrc26hiPPYA",
// "UCu6WP1x-Ne7kNLyCekGxwOg",
// "UCoFshfBgc9zHeS0EMeXx2Xg",
// "UCFXKLSrT-4-Mf5TRqv40rgw",
// "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
// "UCEgdi0XIXXZ-qJOFPf4JSKw",
// "UCOpNcN46UbXVtpKMrmU4Abg",
// "UClgRkhTL3_hImCAmdLfDE4g",
// "UCl8dMTqDrJQ0c8y23UBu4kQ",
// "UCYfdidRxbB8Qhf0Nx7ioOYw",
// "UC4R8DWoMoI7CAwX8_LjQHig",
// "UCBR8-60-B28hp2BmDPdntcQ",
// "UCzuqhhs6NWbgTzMuM09WKDQ",
// "UCblfuW_4rakIf2h6aqANefA",
// "UChGJGhZ9SOOHvBB0Y4DOO_w",
// "UCFb_9tIgnxz1OPhxzipGIbA",
// "UC0qMdMucHI3YfVyP44h3Sew",
// "UCKlp4huyt-jdhhDgxQYuC-A",
// "UCGWbh9eh0V1RV77F0YcqJEA",
// "UCY14-R0pMrQzLne7lbTqRvA",
// "UCIfKIDZI7q8QnEavszi4a8A",
// "UCGdRd6qEUctBgYZVecUI21A",
// "UC1EwyHfJHEKnA7kKfcGhlIw",
// "UCge027A1vlDHcF1r2grjShA",
// "UC-7BJPPk_oQGTED1XQA_DTw",
// "UCVbeGKk2ifNqMRGGXPMtG-Q",
// "UCko2Mq_V_EQ0m-y2u36V-Ig",
// "UC2pmfLm7iq6Ov1UwYrWYkZA",
// "UCGej5zp_KWZ-b_1w4Rq2hyA",
// "UCHqC-yWZ1kri4YzwRSt6RGQ",
// "UCCMhQoxdVuBXVidcdvsBtOw",
// "UCoWIVzxp6oLjsGMGuzzmxig",
// "UCzsV1Z3HsBOPYPtkw0Uw0Ug",
// "UC0k9PfNjEkzISBnSk43mzvQ",
// "UC2rdCWnU8fmFxdgeYXkbbIw",
// "UCBnZ16ahKA2DZ_T5W0FPUXg",
// "UCNYsIqBwQyhnNDVf7SXJV9w",
// "UCAUTncHmFWaaNo91xg4As3g",
// "UCXZpQgX1897wYDLtvzmgyIA",
// "UCR4s1DE9J4DHzZYXMltSMAg",
// "UCe7miXM-dRJs9nqaJ_7-Qww",
// "UCBvc7pmUp9wiZIFOXEp1sCg",
// "UCKcQ7Jo2VAGHiPMfDwzeRUw",
// "UCn8zNIfYAQNdrFRrr8oibKw",
// "UCNKcMBYP_-18FLgk4BYGtfw",
// "UCU0o9YCCbctwhCO4MOUONeA",
// "UCkEAAkbmhYVnJVSxvp-AfWg",
// "UCiFNKHWNEKWuG36UArHONSA",
// "UCD5tv_rTCe6wA7XvzIOQL1Q",
// "UCK-630PZbI642MjrSNf4YTg",
// "UCmG_Zm4o9j4OXu507QaHe_Q",
// "UC07cDL1r32UTTQr1yL77UBw",
// "UCBvSKByiIwcIxd1RcEpOTeA",
// "UCXlOSsfatEWaJvNEFod9C8w",
// "UCm5lZn_XL0Z22FpNFeaGXcg",
// "UCg4a0JAiaH5xMfueCZfy87A",
// "UCM7VzVZAjgsH5F5l6r8uzuw",
// "UC3PZfrCBgOirrMAYDSFlFQA",
// "UCgj7ES9lpYx0jAVwEK_UjAA",
// "UCYJQCYTH9SysQiBpVVuJNdg",
// "UCHnd20g6Qu5Mv0_RgfUH70g",
// "UCWebryusQWKmx_tNuNImruA",
// "UCFRRTyU9aOXGfAMnBO-Z9TA",
// "UCCEHmfupj8YrcRbby4Z2KtA",
// "UCLALxXQK2MzgTbF37FCTOSA",
// "UCDKPwx-NhNDNROag-YR1anA",
// "UCv91THkkj4WXJdzvTpvX-Rw",
// "UCtnboZiB_Nqif-YNtp4aB7A",
// "UCMtFAi84ehTSYSE9XoHefig",
// "UCJ0uqCI0Vqr2Rrt1HseGirg",
// "UCa6vGFO9ty8v5KZJXQxdhaw",
// "UCqFzWxSCi39LnW1JKFR3efg",
// "UC7_YxT-KID8kRbqZo7MyscQ",
// "UCCN6kWMEirfSf2B9eYKV1mg",
// "UC8-Th83bH_thdKZDJCrn88g",
// "UCjzEF5kUZypUftfHD1MKuCg",
// "UCGnjeahCJW1AF34HBmQTJ-Q",
// "UC_uPAFZghRvM1W89Rt-opZw",
// "UC4eYXhJI4-7wSWc8UNRwD4A",
// "UC_aRTkxkOnBYKryuoCSzi1A",
// "UCP02dzmBxZl44n1oLJNwe4Q",
// "UCdBEWWbO7ihYG3Y4GRxnJQg",
// "UCGFTsgFIv10i0u--5rl8C9A",
// "UCT64FdgoiuM8mi7LNDmeeaA",
// "UCpfsVSiGBV6SBKKNtFGmrSQ",
// "UC67vGQZlUvFA6kGqTXSohTQ",
// "UCqjLqQY15lmXBuaK08dzKDw",
// "UCJLsuSyse0TrU37idrhUfOg",
// "UC9KL_2sn3_nuCB0l0w8jV5A",
// "UCx-U-6-fMEm6yuxm5tUA7zg",
// "UCbAN8J-H1qBXr03332Tshvg",
// "UCg4rrHPu4DhuoUe4MK5hI4A",
// "UC-SJ6nODDmufqBzPBwCvYvQ",
// "UCP8NpF8uAYjQkoVbHREss_w",
// "UC_PscE_7n8SiMspieMGMK_A",
// "UC-D3WtZYWRP6j_l5keHZriw",
// "UCy5FUarBYUHFpPtYVuvzgcA",
// "UCWOXZbS9cyBFWiG027T1lcQ",
// "UC09d82usokACH1z5YeKnfiA",
// "UCIZDeCg7Hnd9ZBu5x-B-WlA",
// "UCGho0HsYFowWzC_-RxSdesQ",
// "UCeTDWSJawSuNbBEURTC6w_A",
// "UCrffxKuoEabNq7-l6QNYX1Q",
// "UCr7vgpVnWoPr0fb4ZpsuGOw",
// "UCureYFh9APEsVbQ4OTVfR1A",
// "UCLFBoi2fbNEyayrw507b8YQ",
// "UCjjC1Jk_1o1VWpLalgo21XQ",
// "UChm23DfNn1O-yH_z8mD638A",
// "UCM6P55dIrGsEXpDoSplrtOg",
// "UCFNosi99Sp0_eLilBiXmmXA",
// "UC2a9zmrdjvLsrRgi4G4blWw",
// "UCTqmDXJhRefkgqYotqBv6-g",
// "UCsjrSi7xMkKPk4gcLSjFKbA",
// "UCpmBpSoy6YQjcshNK6pSyIA",
// "UC9LH4WzE6dX3-yTitUSd_2Q",
// "UC367MgL47yIWUT0VoBwUSkQ",
// "UCq37rLTVRdRIXN_HDv1qoFQ",
// "UC0xoBrNFV1HXpQxdGQh7Eag",
// "UCsbJLTBQGQ_QKIz5uVYczmg",
// "UCnoYyWghSoyGCPVrxC8tuNQ",
// "UCAtlZO9a52JIhQRyXDRLaZQ",
// "UCWdoh5Um2dOEvM2ouU_lQUw",
// "UCx5Tqy7lZgSj8NLocGgYZ6g",
// "UCj2GTFekdV3EUsTVN8oaEqA",
// "UClVY6MdQxTZUaMDL-dLQDcw",
// "UCNFOCainfQUP0PE2O--j2LQ",
// "UCA1XKkoUW5v2QV5nKwT5quQ",
// "UCVp3nfGRxmMadNDuVbJSk8A",
// "UC_u0CLjE2CglTTAS_WX-zCg",
// "UCvtbERBK9tNbU2SzFCxeEVg",
// "UCdf7McIKysfJkinf57Pr67Q",
// "UC8rVJyj4zE0S9-sccMLifIA",
// "UC_eQfAQjj6mYj92l3SBmIdg",
// "UCGJdzJQ3R1BpahSvcFq23HA",
// "UCXYRdIXDdeZIf816EWAr5zQ",
// "UC9HlWVtENbiMQzVRmnbJxtw",
// "UCe3yZzUwpmy2eKKmF9svX0Q",
// "UC0t3ejibUQ91s12D4NAaU7A",
// "UCVUnFlqqMl0dVjU1XegF8lQ",
// "UCa-eS13D-FafU8ushde8Geg",
// "UC5ZwMsa284NNp0fVLiG2rOw",
// "UCzMUNug_h1DZD9FmEP-CJMw",
// "UCFtCmNu4HX0wjuwsdccSuZg",
// "UC-IVI5Wn4hY-5tkkmOpK8jg",
// "UCiue3xKxcsBIMp1KliUnb6Q",
// "UCE3D8K7yD-OcQCs9bEIMSsQ",
// "UC537P1Ci1Ug1f4OE0Fw62hg",
// "UCGHi_s4RrqUh4hsS4mLbiPg",
// "UCe9JQN67fXOpATmbLuR9Upw",
// "UCJzQFJ7tZmYEHQcczU0TXYA",
// "UCCJxbtSVfVGRu6LU0DMbMIg",
// "UCzJ29dH-B0jnME4qE6JbLpw",
// "UCKTgj8r-wp80wJgDxhc6jpA",
// "UCoas7UcXqImAc_XHz_lROGg",
// "UCQn5tMRB7vsw5w0pJ1Yz39Q",
// "UCfnRFkeB7W4L_weD7SJI6wQ",
// "UCalz2om9kQIxGHon1W9yzMw",
// "UCLNam_5zriEnECRWtu1eBRg",
// "UC0DbO9FhEiQ5Eo4dDM4QDcg",
// "UCJQplYDHQjYbmADXC-_y27Q",
// "UCvhJ4iWL89Ve5dG1uESvZyA",
// "UC9zX2xZIJ4cnwRsgBpHGvMg",
// "UCEOhcOACopL42xyOBIv1ekg",
// "UCm1dsgJNnhaLkY3uAdqN4mA",
// "UCaum3Yzdl3TbBt8YUeUGZLQ",
// "UC2xskkQVFEpLcGFnNSLQY0A",
// "UC826lDbi69PFCjh_TsHnjLw",
// "UChCDNXr_7WGYGcVsk6JuboQ",
// "UCNMceJPDpB-1ZQJzh2PZ1qw",
// "UCjhjFVR9sAmdeZ7eieF5OAA",
// "UCcMW1goW0gi3Jp9bXPOeLYA",
// "UCDSX4RQN7fzIlZ1nSubwCcQ",
// "UCnlSTwoF1LpAiq13LPVWn1A",
// "UCGqSVyktKVJEdq3JZ6PAP4g",
// "UC7MgqnQR9L6vJv8AE2FVJqw",
// "UCkz9_MzSLqpLfgHD8jmI8iA",
// "UCT86dWwZWeJWGQCDzbipU-A",
// "UCQi67q4kGdmnJaRzX81uK5g",
// "UCayQxFAoFCvGariuQCtHRGQ",
// "UCWxCyZibDIWIrGIgP25mbfw",
// "UCrDkAvwZum-UTjHmzDI2iIw",
// "UCi7GJNg51C3jgmYTUwqoUXA",
// "UComP_epzeKzvBX156r6pm1Q",
// "UCsRM0YB_dabtEPGPTKo-gcw",
// "UCTTBHIoKPIWLAxxTNTiQ9vA",
// "UCUKyOm6LRxogNmOCEwQo1tA",
// "UCk5zUbYfyLDo1cSo-HYvGcQ",
// "UCzbvbTEZNP0U4n5dUQOnlGw",
// "UC9TTmXB2B26v_o4Znk0SURQ",
// "UC6ZX5VcYaQlP8PmrnSNU7Rw",
// "UC1crMgATGeegnQTZTImZuqA",
// "UCXxHhew851QXz2YlKTb5J8g",
// "UCI9RUUN87pqoOymPfV_FMkQ",
// "UChXnu0HBydqedqhnClp0rJg",
// "UCs3YiGrhC5ogCQyBJ25rUFw",
// "UCXbNQaEl83yiO7HVBjiJ7Uw",
// "UCQhA5oFQtavmvA-bBk-G4og",
// "UCHkj014U2CQ2Nv0UZeYpE_A",
// "UC_d6W32xuEAyPlf_KmvvwEA",
// "UCDPM_n1atn2ijUwHd0NNRQw",
// "UCANLZYMidaCbLQFWXBC95Jg",
// "UCQ-ttSCwBiGhgM5GLY1hzWA",
// "UCh8hlIe7EcmVilHjnrE7gNw",
// "UCmY5lv5l2RYGOKWKGXLmGJw",
// "UCb8FPM22JlU-FriBrwyqoxg",
// "UC_hoQDD6zKcIqpIYLsFbBeA",
// "UCtinbF-Q-fVthA0qrFQTgXQ",
// "UCe_vXdMrHHseZ_esYUskSBw",
// "UCxBbkKRwsWudcNMZQETTwow",
// "UCeQEKFH31vvD-InkTGSvCrA",
// "UC8ey1FYCmgHPa9f5KxWb0mw",
// "UCw1UfxJnp1HVvh_QzSbGkog",
// "UCCHcEUksSVKsRDH86j77Ntg",
// "UC-716wgP94vhil91RVJwaIQ",
// "UCi8e0iOVk1fEOogdfu4YgfA",
// "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
// "UCDgRLFjjJeqVKwOFl_N6yTw",
// "UCPV4BsRMseQ23RKy73uplyw",
// "UCtKuVNj4wVrZvTfxPxAUHcQ",
// "UCdu8QrpJd6rdHU9fHl8J01A",
// "UCpko_-a4wgz2u_DgDgd9fqA",
// "UCqtOJAv1qgPcrpiikCpVBzg",
// "UC6lkm6rGYSOD8VhDyCXYJyw",
// "UCD1Em4q90ZUK2R5HKesszJg",
// "UCsx-A5uSO_gYgi5A4RXFCag",
// "UCMu5gPmKp5av0QCAajKTMhw",
// "UCvwCdJ0xl_g8CC2Bguipz3A",
// "UCfT7FJSmIZ6uOyGoAb61vIg",
// "UCckIJbG_MpYWWwlB6QfDKXg",
// "UCbARGW64ZVur1eTmXvjTS9Q",
// "UClGTZDyz3CSl92TgDqIr0nw",
// "UC4PziMH5MvvsmqM0VCZTy-g",
// "UCTrtA2LyW7gie0o8hY4efXw",
// "UCEmCXnbNYz-MOtXi3lZ7W1Q",
// "UCxjZe0qTFXh6jGm54LFWEDw",
// "UCFpy-4UeD7oYWXHwWEJV94Q",
// "UCaOKAjrhCt7-qdKwA0gemug",
// "UCiohAXHK3jDyBnBiPvvmdgQ",
// "UC_EIEf_CeiQ81kT03XFDOdQ",
// "UC-LqvZMkzlQIT2Wy6LyE1_A",
// "UCgn0XMUGLhuDVw4lETlVvIw",
// "UCDwZ2iVPnmtjH0LTjDnWHTg",
// "UCVBFSIF2o1tOAZJpJMAW4fg",
// "UCLURLfYRGAqO3pjihEXSeQA",
// "UCFKo78ysxmRhoQ85ySEo_PQ",
// "UCww2zZWg4Cf5xcRKG-ThmXQ",
// "UCxFt75OIIvoN4AaL7lJxtTg",
// "UCZF51Lm-vzAbN78Z3DFs0Sw",
// "UC9UGYdMSKasjY0mhU1lG4lQ",
// "UC7n6S_tMAorrtr3wX0ajpRw",
// "UCxhWz9ckGf6PSV8pRuc1NTA",
// "UCntGDhwr_YA88wVr0WpOMEA",
// "UCNxZqWO9mhIqniH6W8Vcp7Q",
// "UCKy1dAqELo0zrOtPkf0eTMw",
// "UCdf7KqPteLls_gmI7kjntfw",
// "UCuqpB3JASMHrOsuKy0faL3Q",
// "UCtt03uEe9PrHTocmhOdd07w",
// "UCvZ9QwAI3mZoPP4fXUtM1YA",
// "UC1rQthGO3eN6cVPHBqK3auw",
// "UCfPgFR2ssIb9JPwq-WEVo2Q",
// "UCLAwVEGlvU0D03mSrWqgxlQ",
// "UCgR5VYHYy-u_HIiimcYQOMA",
// "UC5rBpVgv83gYPZ593XwQUsA",
// "UCgeGealT0QYcrnoYRMltDZg",
// "UChg9P8du8Ykqy6MbMK5jpzQ",
// "UC0PXqiud6dbwOAk8RvslgpQ",
// "UCSAUGyc_xA8uYzaIVG6MESQ",
// "UCA_IOpjhmQOsrmLANbFCAEw",
// "UCaUY6L4-3gphKtCbHpK2anw",
// "UC7Ve8I7hidBXNffuzxBTW7g",
// "UCQlGBspQdj17WOPBQMT1k9A",
// "UCmPSwsooZq8an7xOLQQhAdw",
// "UCX9_Ks1MXuwXCmtt0fOFsxA",
// "UCYYlq82SS5SBEYMUoPQzT7g",
// "UCRzJx2cKA-f2EPuZdIpPCPQ",
// "UCQ5kHOKpF3-1_UCKaqXARRg",
// "UCFvXnyAhluG3sa6p3eOs_LA",
// "UCFfQiZ-ENYgzGK8XOSMmaMQ",
// "UCbW18JZRgko_mOGm5er8Yzg",
// "UCb2HGwORFBo94DmRx4oLzow",
// "UCQIP6tGA4AQEIkABgb1AlhQ",
// "UC1OR2YNQLZJYFdQjFrPWvVw",
// "UCGg69hnHIeuhJDvCq-u2jIg",
// "UCdt4A43hgSvjd-ghC8M_Wvw",
// "UCOP2pFvN86MZiDN6VJN9-pg",
// "UCQjxaJ4_6hPA0-ylN0UQVcg",
// "UCH1dpzjCEiGAt8CXkryhkZg",
// "UC-kgRXf0C7WZI4_DqnaC-sw",
// "UCc4utF4nbRG2Fel2AcWLLFA",
// "UC70mVzru1jl_IgR5-8eu3Zg",
// "UCpclRlEJ2oh6JDEJy68UjKA",
// "UCsaafTqw-F0PHtrkDJvqnGg",
// "UC9ayQUGXgf_5g82w9oxVStQ",
// "UC5kyKFGz0XoTkiWm84Gn9rg",
// "UCznEBiVnkJtdXaoBQj3wgFQ",
// "UCY8llT_bwoStEepc6tKXPCQ",
// "UC4PFlxfSYrhDiMuMQRugBTw",
// "UC5WNUHL-fZk3EEQNWZ7XQTw",
// "UCbjNv3gVDn1HmYbYWTk_Rrw",
// "UC9R0FjOpu8SkjCctVuc-i3A",
// "UCz_gUjScjyhPg58hvdk4LDA",
// "UC4Vyy_0yFmDT7boxRQmhkyg",
// "UCsvJZ0wo7wUH_ITRKCJenPw",
// "UCiSQf6v-4cNmbEFdind5z2Q",
// "UC25Gq6Gvy2eBivPY3N9JHPQ",
// "UC9E-oBMlVJGL-lPcRd1wisA",
// "UCJ1qRpMIJdO9vmhRQE4gPGA",
// "UCO3-p0U9OeXdsn5PduQ2DJw",
// "UCrXEvHSt8R91H3eHT6RIL4g",
// "UCcaZ6AlL1D6jmyk7KnbUY-w",
// "UCu68k-9GdtQHoXhL2DCHHIw",
// "UCGxaGz7F3NUnG6GpMfmdkPw",
// "UCvnPQbyY6gTzpBhlrP2T0Qg",
// "UCo7JhL5D00O-AIhFw8WD6Uw",
// "UCzCIbhdN9xgvA67PR_3smEQ",
// "UC8wDs_rKEIUaxOwV_yIOP8A",
// "UC-JoOIkPvphPVCnRpKQhFwQ",
// "UCPy5Oh2DnwPYJe62GIlK47w",
// "UCcZCokPgGvPE9JWd5oc6ZYQ",
// "UCmox5vK01TylxyZuJ6Rt0DA",
// "UCS65UmE6mry-B_gj9q0ZXoQ",
// "UCnhYEUFK-yqD0mNd9GjULNg",
// "UCzneo4pnUz9rvzWUj-G4Muw",
// "UCgziQFvsHRi9T-qSVQkY6Eg",
// "UCvCou5jBHppHtOA0I7y9svQ",
// "UCnCdd7ftmPwO4FWp2NrjOGg",
// "UC2l_2VCKlXdVqbPCmmtqfYA",
// "UCYwBuNKzZOA-FB1KPFhqieA",
// "UC9zZLvMJ4qFweI2TF3G-9BA",
// "UCkesyj2JMJFwNIawDw0ocNQ",
// "UCrwmu-gceGOmtZeuTsn7DlQ",
// "UCq8uYGkJO9VfS8uXSuIuwaw",
// "UCd2-9x-Jrv2n963Q3TnmK8A",
// "UCQRcjJKVnKn89w89AZgeLkg",
// "UCyauCpNGgga52OMKn9yYW_w",
// "UCt1ySOwzjjaepu7VWMtxlgw",
// "UCCHtkHcCll4_ujyGIrw6Wkw",
// "UCtrIvE-HULm9jbgzN26AG-Q",
// "UCAolsolgHiURrQBuZ4qe0lg",
// "UCf2WmSa6SBQT3BxmMGsXEnw",
// "UC5ufnSl0L1Qk6mtrBy4OR3w",
// "UCcEShvbnychuRCEVUDbqC8Q",
// "UCjo0gn1VrMnHc0EiL63wkmA",
// "UCwnDksQEn2GMQfDrHmCCXuQ",
// "UCzXkxl7cYGOuAUF--zM-HDQ",
// "UCkZ4uraWrR61XyHyZ5Ah-XQ",
// "UCvQADbaNDV6S489xyuwB_JQ",
// "UCsSXdQDeQj0Q9GoMXrBiA_A",
// "UCF_zF79Oxq6t7-67Awk_igg",
// "UCQV88jLTYFVrDyUCU3Pi-ZQ",
// "UCQnSTR0txPKslXs_TjIB7Ag",
// "UCFVGsW48fKI8ymAorFTV73g",
// "UCqoZqWIN_2m7J1uvUOrMeXw",
// "UC3hmY45cTSR2dXaDWfzcbYg",
// "UCj5GuFig1ergXwriEnrxCqQ",
// "UCATuR6v6DRf0tz0ww6V66LA",
// "UCzQNgpWWPLuoAC6zA3VejzA",
// "UCDYfiBTEPexujA5wDWvxUnA",
// "UC8i57dVmaPoszAgXr9Sa01g",
// "UCG3pWc-Suodh851b7QaPUBA",
// "UCvMDtE6qv8ORzgL5MEPRB2Q",
// "UC5MflQzxXRcxtbr4XbOs6qw",
// "UCbPQ73V32axPMIBeqdjZ0WQ",
// "UCONsLVL0qwLjDznw-b15O9w",
// "UCxLhNPgzN3vluZPlCM6gUig",
// "UCWcpoLpXEtIFnmFhwjA-nGg",
// "UCafVZzwtU8XUWbXGs4LYtdg",
// "UCrp0s31p_rArZRodHzjB1TQ",
// "UCoDiHcEcXRv_Ed8IozTYBVw",
// "UCqg2eLFNUu3QN3dttNeOWkw",
// "UC883IVbvcI7SPx8kffHjWxw",
// "UC6P8LKLrksKSy1pBTCOxUvA",
// "UCvfb_0dZ0x6wr50bJrN2LqA",
// "UCxAxJ4fhImhnGnwvOFqMv2A",
// "UCdG2Lp3uK0dmGlzLH0ohjvg",
// "UCGrTR0tUD6xgRr2B8LoFwMQ",
// "UC85LZO8Z9kEg6GWnLtO0CKA",
// "UClDfQiurHE_lbKTLtTNcNEg",
// "UCtDy1VA-5F_S4Kl2L0OfAFw",
// "UC65SbK7DTllBxF7Uzinkgdg",
// "UCPrwjCPYPaiyDBziAUm8a4w",
// "UCj5i58mCkAREDqFWlhaQbOw",
// "UCns4T9U8VSIRovKa1a_r7rA",
// "UCJqN59SolWoFlb8R9aP-J1A",
// "UCp6slDC8FYY4WbKBYGzeEzw",
// "UCbU-KGphERl_SFC-5QbmU0A",
// "UCQznUf1SjfDqx65hX3zRDiA",
// "UCU6cE7pdJPc6DU2jSrKEsdQ",
// "UCvWtix2TtWGe9kffqnwdaMw",
// "UC0VOyT2OCBKdQhF3BAbZ-1g",
// "UCtNFd4yNZvk3ZnnK96zU13g",
// "UCBTPbSYpsY9keVvoNKdJ_Vw",
// "UC8nidfOKkcgpO6tfc9OSdBQ",
// "UCzKl1H9v1Ck_Laf9ro0t1mA",
// "UCx_aTs6rOw-8YPDOGJOeeUw",
// "UCcUhgsWPZU8U_u3B_yCgwgg",
// "UC3EKokt8lCDZm1F-VwPNliA",
// "UC7JDBUzkcwRGtQGia3_mMgQ",
// "UCxz_wnE8zPVgLL32N0Ike3A",
// "UCdOcBpu5O2V0JhFFs9k-Ouw",
// "UCKjrT7t9h6GsSkzhFe0ccDA",
// "UCSNWDiyi5HKZq9LHKLrnjZw",
// "UCmKdSrwf1e8coqAzUsrVHZw",
// "UCe3I9BAVCzf9oACYU1EtrxA",
// "UC0o0YrtB192njUfBug6IgYQ",
// "UCdxZ6IDeGHGYKm2W93CczZw",
// "UC4-TgOSMJHn-LtY4zCzbQhw",
// "UCs8ynQgjoKZblUXosXoeOEQ",
// "UC0C-w0YjGpqDXGB8IHb662A",
// "UCwppdrjsBPAZg5_cUwQjfMQ",
// "UCN1hnUccO4FD5WfM7ithXaw",
// "UCmfFGTSsfJVu6CGvL8r75qg",
// "UCvu362oukLMN1miydXcLxGg",
// "UC20vb-R_px4CguHzzBPhoyQ",
// "UCf3cbfAXgPFL6OywH7JwOzA",
// "UCk78ZcA6kflEvBR0UrGDH0Q",
// "UCnyB9MYKRkSFK3IIB32CoVw",
// "UCp0hYYBW6IMayGgR-WeoCvQ",
// "UCHai12P6Gh7PaIYZGnzyrSA",
// "UCcemkeZKHXdDkIinIwar1pg",
// "UCcHYZ8Ez4gG_2bHEuBL8IfQ",
// "UC-jTYh_XSJUrvcjKNO5tTSA",
// "UCM7IwsOOeZBLBFO1BCkGGVw",
// "UCF_fDSgPpBQuh1MsUTgIARQ",
// "UCRKNyJc9Bo1vbBO_67wyQEQ",
// "UCssD3_aDYhaG44mwP53CO0w",
// "UCxrnpUor0IuXwxMiV7Fx_Cw",
// "UCY0C6A3t3RTUN3BB65rWAgQ",
// "UCgLJgiGNBPdISct3KvhKeYA",
// "UCi8dmVdtqRtBzXq4G12y5AA",
// "UCNAN-XHwkbNeQGWv9mxHQXA",
// "UCxRs2lrrTSB8pR_ltYtodDg",
// "UC2kTZB_yeYgdAg4wP2tEryA",
// "UCPu7MMzUJACDH8AEE5RlhCQ",
// "UCqwogWpYsDcpwbnkvO5VOJA",
// "UCP17n19PK8L81cbDx3qd79Q",
// "UCo6lsHXjHuRjqCw8kZYfDyA",
// "UCQI7W6ikLs9sz3Z4LuPw6RQ",
// "UC9evtjwGEOZa_xKY6bn0xQg",
// "UCupvZG-5ko_eiXAupbDfxWw",
// "UCk1pcWQ5E19g0Cgp4c1eI1w",
// "UCLUrvqV8UQydkPUC7AHEopQ",
// "UCBi2mrWuNuyYy4gbM6fU18Q",
// "UCY9UOc9ZsFpeluXyb8AnkNg",
// "UCtcQ6TPwXAYgZ1Mcl3M1vng",
// "UCWJ2lWNubArHWmf3FIHbfcQ",
// "UCj2HtBTppiQLVrZfEjcFxig",
// "UCSRCLdyJsfebIvpe8BaOrlA",
// "UCG53t1jAJelNdWOpRHJLBqw",
// "UCtg5C-d_3rPUgMaxr285mQQ",
// "UClFZ58k3TunTz8QVp-9e1Vw",
// "UCpFHkjOa7ia6bH5_6cDsDXg",
// "UCRyIP2oznv4UPAl1jmKS5kA",
// "UCRijo3ddMTht_IHyNSNXpNQ",
// "UClW44KG_EKETupl-3BlnLSQ",
// "UCdxi8d8qRsRyUi2ERYjYb-w",
// "UC8ZEkekkyULsdNzoPxTpSOg",
// "UChh-akEbUM8_6ghGVnJd6cQ",
// "UC6gJbwok6qZcMNFegKtGt9g",
// "UC2rZP5KZgwVUfqKPjsd-o6A",
// "UCUoEWMvijAEn-hWTLUtfdoA",
// "UCQNL_PyITkAa3d4_aQGpstg",
// "UC40rScv6Ki7Ym-stlE1IhjA",
// "UCopwh9YJuhQw0tyrNlFXXhA",
// "UCaCORP4Js94tnvlw-EI1_DA",
// "UCZRtjNx9fy3kbG2LD_n_3Lg",
// "UC23NsmMtJkdU-bbLZx8dzQw",
// "UCGHYXiTIinNZ50M2mFMkLVQ",
// "UCwga1dPCqBddbtq5KYRii2g",
// "UC7d4ckzrCKXJxXbNdLDvF4Q",
// "UCIJ8yiBEYi7OSDtJmTZnUZQ",
// "UC8rador8CU-pTJ6p7WNiv6w",
// "UCFwEggLD91IcxpZvGqltJvw",
// "UC_kyhuCGhgbur6g7NJ_Nrqw",
// "UCBIrEc5jXi-76u9uN9Rwa2Q",
// "UCAsrMkD4zPGU3lPFb0WVljw",
// "UCiPbE1TBmEfgUWcQJUztxrQ",
// "UCybLgKCtOU8Lw_1NX5MIzqQ",
// "UC8PEFsKfPrqZR2UuZziv_xA",
// "UCKY0A0Aohc--2QGtBTKD0pg",
// "UC_rE3bivyW-5h3O_bynaGxA",
// "UCrqcO8Vh-nM2fWFZnT1ss7A",
// "UCQMle4QI2zJuOI5W5TOyOcQ",
// "UCchFIF4bL_8DWnLLSqMy5lg",
// "UCkaNo2FUEWips2z4BkOHl6Q",
// "UCTuao7eN5bH1DH5iPzRE09A",
// "UCrmhsLEc-VM8yQRdIsBszqA",
// "UCBxDkwHz5SW-Mtj9rfjM_mA",
// "UCaosptIPYipmEEqB6GfQ14A",
// "UC1UYCL1SgyBAVudD-3R5y3w",
// "UCX5qMbq8Y9h9TOdFhKUhkrw",
// "UCqn7r-so0mBLaJTtTms9dAQ",
// "UCqFMzb-4AUf6WAIbl132QKA",
// "UCuurB9cwATPco9D2IJTXSNg",
// "UCqhnX4jA0A5paNd1v-zEysw",
// "UCY_5h5zaSwN7Or4kIJDYNXA",
// "UC87j_-SIjbzUqlY8tuKlZyQ",
// "UCsFkInl7eWF0mkBbT2ATbNA",
// "UC4LeRw7pIZ_kseS4Krn_DQA",
// "UCdh9QiTX0DwVrpj57zQqHaw",
// "UCqZkk0G1C5w1E1CTVVzqLFA",
// "UCDlCB0A7809y2fLSo0Is3xg",
// "UCl1VZZBJOek74LSrL5Ra6nA",
// "UCvWgNPw0cTgV-iwAFPKTRoA",
// "UC_bMBKMOMXiMi-oJzIf7LPA",
// "UCPUzyNsRovrWbmvvow9wEpg",
// "UCoLrcjPV5PbUrUyXq5mjc_A",
// "UC12iVP0lVgYG3z6PzCcS_Sg",
// "UCDKG8OwkbNwovZE6DpfIfzw",
// "UC2MlkQW2ovIo_eXKKEOtxeg",
// "UCNd3TWZG_H4QbP904emDK9g",
// "UCL9QTpkZUW8iW_0Y4XKWhrA",
// "UCrZ0xUaTGrGunsAiU3wIkcQ",
// "UCDmrPWwGCMAuryxrLqc59Qw",
// "UCnF_kucm6h5Jw77mMxonWdA",
// "UCLeJwOh9USnumJ0SrspO9-g",
// "UCkcRYjXjAhsBPVH4aeIPxmQ",
// "UC3fhdA1I956BujXv_W9iXNg",
// "UCAmG2A6ag6pB0DAkq7w6ahg",
// "UCgV7qqleAFHGh1twhBDj-MA",
// "UCyVYK8gO95N3S8BsqjGk5lw",
// "UCHVuUXxeRo-SbzNwOImm_TQ",
// "UCQpBZtaL3ShbTS9LPvn2wdQ",
// "UCv8ghBEttjbxNOAdt5Ib7xA",
// "UCgFsv2r_kgZutNPrJ9jIW8w",
// "UCcdysvRTBHNvUpWSF3H8NmA",
// "UCd_j7HdAs4AXFOoAP6Buw3Q",
// "UCrkfVuTumSEYa_R7zUJOUCQ",
// "UCB1nK_ShFZjhcWbFXF7rZcA",
// "UCQvWX73GQygcwXOTSf_VDVg",
// "UCSAcRxqflcrAoV7kNA_PE4w",
// "UCiEsp1AgWdnjKF1hC7VEOzw",
// "UC28ZciCEOs5ruffKqyvrcYA",
// "UCOZtN341OPeGYbfSF4-NfSg",
// "UCO_8hF-oulap_6lXy0oXLjg",
// "UCFDw8H6GO3bQNoZWaFiNvkQ",
// "UCOquqcRMJmURiGfEnaitptg",
// "UC279mtSpGdNDRVE_NqSPofA",
// "UCCWYgvAsmntBvaniq6x2ddQ",
// "UCLQm8HQBd3nbhLOdVYlo8_A",
// "UCpv-G8L3FaK6QCbGl9C04pw",
// "UCS5Oz6CHmeoF7vSad0qqXfw",
// "UCKqH_9mk1waLgBiL2vT5b9g",
// "UCpGdL9Sn3Q5YWUH2DVUW1Ug",
// "UCERUmrDh9hmqEXBsnYFNTIA",
// "UCke6I9N4KfC968-yRcd5YRg",
// "UCC-RHF_77zQdKcA75hr5oTQ",
// "UCYzPXprvl5Y-Sf0g4vX-m6g",
// "UC9CuvdOVfMPvKCiwdGKL3cQ",
// "UCkxctb0jr8vwa4Do6c6su0Q",
// "UCRBkeMoYX02w-0qVIKNkruw",
// "UCGPXV9NJRQAqRsoLH49mgbw",
// "UCRL9jNF5eKw2sdYPf6pCYjA",
// "UC9YydG57epLqxA9cTzZXSeQ",
// "UCERVhkIYIeEdTQkQciwDN3A",
// "UCo9Z1lMH28yIdGUkB7y4_5w",
// "UCGkCHD9P5QzlxzaZfMjM10g",
// "UC8uDq60PstVf56UwH6qfMAA",
// "UCF3KMM3QLVEfnFPI8AbLUJA",
// "UC1ltQyKe4KxKz863-6To91A",
// "UC0NwzCHb8Fg89eTB5eYX17Q",
// "UCxsk7hqE_CwZWGEJEkGanbA",
// "UC48rkTlXjRd6pnqqBkdV0Mw",
// "UClkUHCETNUph8vM-4gQpwUA",
// "UCvqRdlKsE5Q8mf8YXbdIJLw",
// "UC-UXMS9Q-apozW8jALP5UZw",
// "UCEaEuwKjrE2BtvKErBPQAUw",
// "UCPEcqkRG-kf2Vk6Rn_2WZSQ",
// "UCmC5_1SlbQ6pJ_Jd5VC8tTw",
// "UCcPIUh7CWwtBXisMPHWG65g",
// "UCipmH2g_R0igpvmUkoYJfoA",
// "UCzc2guk44cz8-xT4oCV6QkQ",
// "UCb6FnVVxTQVm5QdxCxYMV2g",
// "UC76vyQZnIIF7iA5ta24ukVw",
// "UCzYfz8uibvnB7Yc1LjePi4g",
// "UCKlhpmbHGxBE6uw9B_uLeqQ",
// "UCSXnAtb3ixz3EZ6nBcWUEmg",
// "UCEaReYkPVfExkfXptk0bSPw",
// "UCxJf49T4iTO_jtzWX3rW_jg",
// "UCzTlXb7ivVzuFlugVCv3Kvg",
// "UCMWHhRY7Iuxwm1hF1Fv-btw",
// "UC-kOXc3gBwksVfmndSEz7jg",
// "UCvPW1W4WlpTgNezZzwIstLA",
// "UCq54nlcoX-0pLcN5RhxHyug",
// "UCJQcOj0yUAef9Wq6wE7OWVA",
// "UCvMQn4d_RFWYShDBCbeuuxw",
// "UCNPCx6BWK0ID6UKO1QicOmQ",
// "UCH-_hzb2ILSCo9ftVSnrCIQ",
// "UCQCnMFr8uHBaMTaNBhych_A",
// "UClsDI_I7vsPFNH4a1q1Ls6Q",
// "UCQiojTHkAvFvdCSajklqUXA",
// "UC5VnC5l4dkFR0oVaPL_en2A",
// "UC2aNolp7Nc41x9M5CG6XKTg",
// "UCfnopZIrGu0NZhqRjEKA3tg",
// "UCFYMDSW-BzeYZKFSxROw3Rg",
// "UCyfG7-7lPhf6EIC6igUOfzw",
// "UCQdgVr3dEAeUvDbhSHAw4Gg",
// "UCEjTIBn0uJe2g9q_glGTolw",
// "UC5enhS5tdXhHNbj8s_kdBUw",
// "UChd1FPXykD4pust3ljzq6hQ",
// "UCxe93I7CX6ib1Ttji_zBAQQ",
// "UCf_oZtjZcE_NOzYaQ1uPYMg",
// "UCYVinkwSX7szARULgYpvhLw",
// "UCU6Xdctu2CsQp3NhyyrW3Dw",
// "UCC-uu-OqgYEx52KYQ-nJLRw",
// "UCEHf6KUY7Zw7hlXQ7hDemwQ",
// "UCeCYRv2Odpjfr41ts_PkiTw",
// "UCa7507M549AiDKN8J89tn5A",
// "UCFGtTxNQEy_XRfUjFYpklvg",
// "UCHdMK5Ef2El8KbD3L_WgANg",
// "UCgrpA6pVkSU3WfCjL1NN7Ig",
// "UCuq-BKCL1mD9l09UJX1GKog",
// "UCkzRDjtq4ngMADh45j2KsJQ",
// "UCYF-3u_Jh5lWzPG2gRDD3-Q",
// "UCvzZ4HawOrRqYioVnd26y9Q",
// "UCPENxjKV07HJyp3KmSXAxkA",
// "UCxOMzMTzK_2Jjt_F0vlWmSQ",
// "UCZd0r8Sm9p2j8ixsk6oqqww",
// "UC4_bwov47DseacR1-ttTdOg",
// "UCFYs3KYHDPoZfwGv0A4sYGQ",
// "UCP9tAErY_RlX4RFKssE4ogg",
// "UCIPVJoHb_A5S3kcv3TJlyEg",
// "UCJzXJyF32TlaXc5cegFvZ5w",
// "UCd4sjUqC2QPACBmT-IA0bng",
// "UC03MgSOMMOboWsf7L8JWddQ",
// "UC8m_rlTdZaNbQY-Umnlv2Xg",
// "UCCAcHfjfkDcfM1fdIZnfNfA",
// "UC6CDyR0YD7OtvGu2dzbjaWg",
// "UCma1ORJpgjDddwaExn4prKw",
// "SBl-q6K-iFs_0",
// "SBF1b9kTPFNiQ",
// "SByDf5N1CinWI",
// "SBnZbd67wyBSU",
// "SBNIumgcBkgnY",
// "SBLRDg874XJh8",
// "SB1luBg42XGn4",
// "SBlteEO-VNsDA",
// "SBpcHF0FYOb_k",
// "SBKQgs5rnH_I4",
// "SBOu47jVdUp_w",
// "SWhCfd-T-Dnok",
// "SWP8z-h2GL-ac",
// "SW4EA8iiFdzc4",
// "SWT1YHk3EFEGQ",
// "SWbFujq9miUqU",
// "SWw9pjWt-DDbA",
// "SW7eb9oAGQWb0",
// "SWBRhRDB4xj5M",
// "SW8RnByC9Ie50",
// "SWXYyQ9z0FYmo",
// "SWOsYxX0xkG7k",
// "SWcCniTa8loH8",
// "SWpe1MhA1cMBA",
// "SWaYF0bEQa5GY",
// "SWC3PXX9jb1mY",
// "SWz5j9r4sIMds",
// "SWLDJRX9UP7xs",
// "SWMlAGlhgkIkQ",
// "SWn7UYhn7ZyIg",
// "SWljvvRKUoWu0",
// "SWuDrw93dNI1w",
// "SWkz7jn0YRjg8",
// "SWGTxML_JnbtI",
// "SWU25nzKgjr3A",
// "SW2lZwLRejoIM",
// "SWkQFFJxMfgZ4",
// "SWNFFP3kBrnzQ",
// "SWFV7PwP5B-nU",
// "SW-lR435coksI",
// "SWhPBaZPWLpc0",
// "SWwyn7W6Su-V4",
// "SWxWXRPWZvUAY",
// "SW0OcxMNEBBds",
// "SWg4Aw3lNnafo",
// "SWpmJv8_eIwLY",
// "SWoVfTOfdvE4E",
// "SWojP2isZpJRg",
// "SWSOtdLUJps7g",
// "SWGcMSi9Z0uK8",
// "SWusuf-Up6Okw",
// "SW0gaydE66_J4",
// "SW5ztAXK0vyfM",
// "SW4GWtAjEOoao",
// "SWdczUnSLS3sE",
// "SWtgqRqCKFcEw",
// "SWr7y7TN7X_nw",
// "SWtGULOKY0zS4",
// "SWqaagWmT4u8E",
// "SWcRZ_kuLZlyw",
// "SW7QxTINB65yU",
// "SWH5TRVZuTVGg",
// "SWxupDti6MUDk",
// "SW0n2IYKoL-ow",
// "SWBKHI45uRICk",
// "SWK4puzna377w",
// "SW-lYn7BSPglw",
// "SWLsk-QaXFXr0",
// "SWpm09gwknyqA",
// "SWGeFvpSKTTWY",
// "SWdCnzXTVCeZA",
// "SWQ6x44K2wiP4",
// "SWhS1iTj0HxAU",
// "SWkorWcu_8uzM",
// "SWEfb_-dm_rOw",
// "SWHyiB4Jsft8E",
// "SWgYctkvdHCh8",
// "SWHZJzJoGUXdw",
// "SWAfpYVYlgjwA",
// "SWY7MlczMaGx8",
// "SWY8HQYzrZrHY",
// "SWcB4eLWjlaEw",
// "SWzOWtUJ17yhk",
// "SWyyeNxbukfz8",
// "SWyg4hKqsO2L4",
// "SWF-9KKZyMwDc",
// "SWvCwBUv5qDbQ",
// "SWW1AY2ErNm8A",
// "SWt1-TEiswc58",
// "SWxNTNMV5GQI8",
// "SWqpaXZ6LaJ7c",
// "SWOIEYFVMORc8",
// "SWrJP5gzeyV8g",
// "SWKIhIUuv9s3o",
// "SWna2UOXmBi8E",
// "SWZoQfVDo1wJk",
// "SWNiEQsTk1OMw",
// "SWFg70w74XeKg",
// "SWWpYsSEk3g6s",
// "SWRKky20hgLHg",
// "SW25TCHIWRfqk",
// "SWn8ZwcxedTT0",
// "SWvoy4-XmMACg",
// "SWYNe6ryNEK4c",
// "SW38xpt5je13E",
// "SW0YsjovWspiI",
// "SWv4mOiJq3u80",
// "SWBsurk28qufo",
// "SWwy57Ri8dGTo",
// "SWmZpKT3hMktE",
// "SWNwpKEuAJoRI",
// "SWFlfdlsdnyno",
// "SWCeFuwITwEsA",
// "UCvAvFl2OGsuDSoOo93Kd0nA",
// "UCcE169gw8kJCzyCJZXb7DQw",
// "UCQxtLzG3ckdfsnxd8MDfx2g",
// "UCZ7QHqCYPE3Zi2Tt1sBobEw",
// "UClnA6kw0Qb_Cn-ersL7xg7A",
// "UC4WPFQWSvsDuUKsIjXrgCEw",
// "UCEl0qh9X3kuL1RdFHng497Q",
// "UCiiEf9oJvxfMfyJisqyD3BA",
// "UCn371zWk5jljg-ycIXkEUSA",
// "UCSrZ3UV4jOidv8ppoVuvW9Q",
// "UCGbEXjkmPTCQfJ4FiD3lOQg",
// "UCwuZjWoiT30kDTz0G41Y8gQ",
// "UCaFxVc4xHOea6s5CO0eBxIA",
// "UC13mSI38YWz5zfvxXDPpePA",
// "UCEwvG5gUYguvC32kX8VGH_g",
// "UC2cOggXWYaxqXr4ELJ47zmQ",
// "UChqUTb7kYRX8-EiaN3XFrSQ",
// "UCknLrEdhRCp1aegoMqRaCZg",
// "UCy8Lq7my3GBcdg7W-_3u3MQ",
// "UC_2irx_BQR7RsBKmUV9fePQ",
// "UCx6h-dWzJ5NpAlja1YsApdg",
// "UCN4iWTZIICpOe-78cz9RP1A",
// "UCixD-KrpjXtMupkzkdFFlFg",
// "UCzhtAFR4aiLOr8IWqA92-5w",
// "UCpWvshQVx1d7BqCsPnVuNIw",
// "UCDKXqKVQz__gFavp64iyx8w",
// "UCTbhS5-KTEKzBh-eqeU5vAw",
// "UC52X5wxOL_s5yw0dQk7NtgA",
// "UC86dbj-lbDks_hZ5gRKL49Q",
// "UCPgLNge0xqQHWM5B5EFH9Cg",
// "UCvfvlmvYiUo-kNzYngh-o_g",
// "UCyHX5j6cvdDlDFarayCObRA",
// "UCLLENV4JjxuHCGnC-SyxN8g",
// "UCENwe4N7FQCfIWY5wEjimNA",
// "UCgBVz3EzHYKpPS0BITvLRsg",
// "UCTln5ss6h6L_xNfMeujfPbg",
// "UCFgFRk_6jae5D6KUokxIPfg",
// "UCmNZ27C9wocxLxZKyjAl-Uw",
// "UCBpmDJ7mNqvKQ1BtRgY8H7w",
// "UCgT2lqEtcqIQjs-z57eykLQ",
// "UC4JVxN39Y1vCOp8tQ8EbUSg",
// "UCJmSX7ghommK3pwMLGNUvPA",
// "UCmb9yvLnXF83FZpWzAi9ADg",
// "UCbbZFtR5ahylOpWV__J0maQ",
// "UCeR4TlbmojlqImgr-2SBkJQ",
// "UCe2PK9vNxfogdvkx4jqB8uQ",
// "UCd2QBrKT_GzjlsMOX4lLHOQ",
// "UC0uVZd8N7FfIZnPu0y7o95A",
// "UC32TdiIsh_5X8tKr_9rKQyA",
// "UCCXoCcu9Rp7NPbTzIvogpZg",
// "UCP6HGa63sBC7-KHtkme-p-g",
// "UCs6OTZVtmLwWodmjLutisjw",
// "UCWTkpYvniGIUe1jeCncFzKw",
// "UCNye-wNBqNL5ZzHSJj3l8Bg",
// "UCK0UUsCjtMRNtS3BPh1Yc4w",
// "UC0aJpP4DgTL96qnQE5BA1Sw",
// "UCV6HJBZD_hZcIX9JVJ3dCXQ",
// "UC4qz5w2M-Xmju7WC9ynqRtw",
// "UCqEobfdxKqbf7X-cUh9Ul0Q",
// "UCGlXYND4Cqd6yN5DarMsfqw",
// "UCbc_LGxLxkKMdfzm54HMEGg",
// "UCpzuVmgg-YF_FATxDgH2ggA",
// "UCw-4Okdw4mzBZLr9809doBA",
// "UCP7jMXSY2xbc3KCAE0MHQ-A",
// "UCy1F61QvUUQXAXi2Voa_fUw",
// "UCzQUP1qoWDoEbmsQxvdjxgQ",
// "UCUJMHqab_uJsqNZiwfNyg8w",
// "UCVvv3JRCVQAl6ovogDum4hA",
// "UCDMOEj6lneZWgrp-r8KqXIQ",
// "UCpyZBPJa5u2vJcGZRHat-Tw",
// "UCjwGWCVH44CEK6R2B3JEttw",
// "UCXVCGq3gAtO2Hn8YBWQzVow",
// "UCKVarHLn86kbo7TgvvBynWA",
// "UCNM0mo5hnXLFG0kw6SXZTwg",
// "UCRPWwn5yyX5Eb8ZO1Y05XQw",
// "UCUN6vblPnIz3PxEaOkwBnUw",
// "UC9tcy2y5nFOKVPiU0OxplJw",
// "UCrJG6SHi1us9K6VXQwqC49Q",
// "UCAGmvHF5KuddiOouW_yE0tg",
// "UCB9rSNfGjOXe35pg5gLZEVQ",
// "UCGGUd41NlG_2_VSJe1YObBA",
// "UCqwrWy2vuLyCxJDjl2s7ZDQ",
// "UC8NnosPOvXnm0O1u5YnLQiw",
// "UCfC0RcYzDQcFtHrce2mpvbA",
// "UCbom0CiQ098O3oZF1DXwUbw",
// "UCKs95186Ebq9CUbvJ9vaSfw",
// "UCakgsb0w7QB0VHdnCc-OVEA",
// "UCLA_DiR1FfKNvjuUpBHmylQ",
// "UCV6YulZ8e8WjF3lVbz60PrA",
// "UCe_3CoEeinvPMze2u_aENBg",
// "UCSqkY-wxqE-o5GsPw_dBgPA",
// "UC9jBUZwzNmgWTmoVS7JVuqg",
// "UCeFhVfUYk5y6boBsN9_21jA",
// "UC25XPdlNT26ngndmdWPCifA",
// "UC_xJcIvPjp4pAKnpBC8K-YQ",
// "UC_KxLU90jp3IJj4JmMP_Qiw",
// "UCAcksz9t_ypDx6FXCZ6T08Q",
// "UCqnbDFdCpuN8CMEg0VuEBqA",
// "UC4wvaithpRfVaJfPg0GstbQ",
// "UCJUn6QmXuFV9CkuJB9T7F_w",
// "UCCElWWOcCFa1kYjlnPiPuCw",
// "UCpcTrCXblq78GZrTUTLWeBw",
// "UCzaEjc9xTG-HwDwTzonwpYw",
// "UCYdzR6PYtEkfStrgrFa6Y-A",
// "UCedcH2kb9dRn6qPcafYF48g",
// "UCtKnT40AJuC6f_MYNLFsDeA",
// "UC22iF1pxZBK2w4py5W6fdXA",
// "UCwgURKfUA7e0Z7_qE3TvBFQ",
// "UCVq1Crat76rKsgu6WosKwmA",
// "UCUmnzBNYWwTR4cGNDi9ED0g",
// "UCGwPbAQdGA3_88WBuGtg9tw",
// "UCvphW8g3rf4m8LnOarxpU1A",
// "UCwdMAG04V3V7r55Wp2FYnjA",
// "UCLsgDgYTlIDN3cCLSMpooNQ",
// "UCk2iPDi_KmTYfHZx34FiMjg",
// "UCK7tptUDHh-RYDsdxO1-5QQ",
// "UCGaVdbSav8xWuFWTadK6loA",
// "UCnltgt0ihG-sHJ501xX39ug",
// "UCJlR_vpux2H2Y9fdZS9-e_A",
// "UCBNs31xysxpAGMheg8OrngA",
// "UC5zSySQab9SA6Wz569WDgqw",
// "UCfAEEhKikW1676DCa_0OWLA",
// "UCzJIliq68IHSn-Kwgjeg2AQ",
// "UCxdAaYkXAf7xlYAAhf9nsZA",
// "UCPlreGCqby4Qg9Vuem5scpw",
// "UCRD6jmN3uBjmJCnlH5WeOKg",
// "UCar99bFfYzHI8xG9cIG22ww",
// "UCbK1O-GSEDwjdSO5udBVrxQ",
// "UCuYx81nzzz4OFQrhbKDzTng",
// "UCAjbOf0b34zj_8gCicXdceA",
// "UCTAgbu2l6_rBKdbTvEodEDw",
// "UCAzeN-OPb-07MxS_J8NuH5w",
// "UCt_t6FwNsqr3WWoL6dFqG9w",
// "UC7FhOuPmxz8spz_xvJf_xow",
// "UCPDXXXJj9nax0fr0Wfc048g",
// "UCzBYOHyEEzlkRdDOSobbpvw",
// "UCiXoZHFowJUlDVMuRFAwVAw",
// "UCGaweJW8AnsV2ogktwOaWhQ",
// "UC3o5ggs_5Ov0-99hJC_8xuA",
// "UC1bszM52V3aZSqpXZFbP1zg",
// "UC07Kxew-cMIaykMOkzqHtBQ",
// "UCXviPNYh05QFxVK7i6M-RAw",
// "UC6QdZ-5j9t_836_xJPAaRSw",
// "UCO_OG8nuMD90sMQ8DnhQ9YA",
// "UCETZ7r1_8C1DNFDO-7UXwqw",
// "UCwRmRZFN_nTAkKZYngL-x6A",
// "UC0DHUE6FlFp0wDHlwM5uHBA",
// "UCAQNGukCiNGtrTXGRv4M97A",
// "UCRa48B9_dKNRPum0z040Ozw",
// "UC3pC_1P11PhzYThH2SnKAcg",
// "UC3fg6pL63upkXCc0T203wVg",
// "UC9gFih9rw0zNCK3ZtoKQQyA",
// "UCIg7U4yoXlm2_nnkl9wsIcw",
// "UC0XWmgRsBL-6X-ZJ7tR3mEg",
// "UCZC45sBWNdkqSQ9Bwtt5lfA",
// "UC6GDV85ZQT785h8PD1LhPSg",
// "UCeB0K8AL2mCJhrBdCeD2BgA",
// "UCygHlwHI__fabDWPsbhzxVw",
// "UCQ3o8kIMsenaKpQE0x3a3Cw",
// "UCW1hKNIS3IQVM9NYyhv9vSQ",
// "UC9ZUGEuaH2CDCwfxP_r3SoA",
// "UC-DuRqsBQOEk_5o1q4Ze-Fg",
// "UC_IpSl6O_-IRAA6fiNs05Gg",
// "UCbwp5B-uDBy-fS4bDA0TEaw",
// "UCsn6cjffsvyOZCZxvGoJxGg",
// "UCxFmw3IUMDUC1Hh7qDjtjZQ",
// "UClj0L8WZrVydk5xKOscI6-A",
// "UCX8uUIAVIIo_7WgRG-jN_rg",
// "UCHd62-u_v4DvJ8TCFtpi4GA",
// "UCZfsrIV68Oegr5bJgAMLBDA",
// "UCeY0bbntWzzVIaj2z3QigXg",
// "UC-OCnx2rKlOfXVAos7cYUog",
// "UCMKvT0YVLufHMdGLH89J1oA",
// "UCX70sfic86MKcid2n0mmmqg",
// "UC6gLlIAnzg7eJ8VuXDCZ_vg",
// "UCz91XLkPIML8diJOvIiw9kA",
// "UCdjtOGehZ4Baw1iuN5BCZEw",
// "UCtxyD8Gpx-mzSn9o5H7JoFQ",
// "UC8gRwwIx9Ex4B5LdPyLmELw",
// "UCqL9U8GqRychrfZSgb_CrBQ",
// "UC6NkTCJimTbM1KKCHkpL4uw",
// "UCbcDdPX_v55Oz8CEa8vUikQ",
// "UC8wT4KKAGTm6gjKlj5uw0LA",
// "UCINdgasjlkvn8MljWHarxKg",
// "UCtPwpYEsGcnmN8ZTy5qMosA",
// "UCW74lmIMkBFoEWKVDFe7ZXQ",
// "UCL8Nxsa1LB9DrMTHtt3IKiw",
// "UC0LKzPzCaxEWJ6JzRsXWIYw",
// "UCmbP8N4zqO9UJtO2cNCQ0jQ",
// "UC8XRA4Gy3if6mDoJapOz2iw",
// "UC-yJX7UOF_3R8uj3eDRhEDA",
// "UC1SqP7_RfOC9Jf9L_GRHANg",
// "UCYxRlFDqcWM4y7FfpiAN3KQ",
// "UCOL1eYz_MgSNQ2TsPJJ7g1A",
// "UCjvqqA-Eogozfm244OhUESw",
// ];

// // ██████ Integrations █████████████████████████████████████████████████████████

// // —— A small library for turning RSS XML feeds into JavaScript objects.
// const Parser = require( "rss-parser" )
//     , parser = new Parser({ timeout: 9000 });

//     const express = require('express');
//     const bodyParser = require('body-parser');
//     const app = express();

//     require('body-parser-xml')(bodyParser);

// app.get('/test', ({ query: { 'hub.challenge': challenge } }, res) => {
//   console.log(challenge);
//   console.log("ok");
//   res.status(200).end(challenge)
// });

// console.log("ok");

// app.post(`/test`, bodyParser.xml(), ({ body: {feed} }, res) => {
//   console.log(feed);
//     console.log("ok");
//   res.status(204).end();
// });

// app.listen(1234);

// module.exports = async ( client ) => {


// }



// // // ██████ | ███████████████████████████████████████████████████████████████████

// // module.exports = async ( client ) => {

// //     // —— IIFE
// //     ( async function update () {

// //         try {

// //             // —— Retrieves all the information from the channels to be parsed
// //             const channels = await client.db.Notification.find( { } );

// //             // —— Retrieves RSS feeds from all channels
// //             const RSS = ( await Promise.all(
// //                 channels.map( ( c ) => parser.parseURL( `https://www.youtube.com/feeds/videos.xml?channel_id=${ c.YBChannelID }` )
// //                     .catch( ( err ) => null )
// //                 )
// //             ) ).filter( Boolean );

// //             for ( const [ i, channel ] of RSS.entries() ) {
// //                 // —— Compares the date of the last item saved in the DB with the date of the last item in the RSS feed
// //                 if ( new Date( channel.items[0].pubDate ) > new Date( channels[i].pubDate ) ) {

// //                     // —— Get the index of the last video sent
// //                     const newElements = channel.items.find( ( v ) => {
// //                         if ( new Date( v.pubDate ) < new Date( channels[i].pubDate ) )
// //                             return true;
// //                     });

// //                     /* —— Get an array of new videos, then reverse ( because the first one
// //                      *    is the most recent, but we want to send the oldest one first ) */
// //                     const toSend = channel.items.slice( 0, channel.items.indexOf( newElements ) ).reverse();

// //                     // —— For each subscribed guild
// //                     channels[ i ].guild.forEach( ( x ) => {

// //                         // —— And for each video
// //                         toSend.map( ( video ) => {

// //                             // —— Sending the message and the video in each guild to the corresponding channel
// //                             const guild     = client.guilds.cache.get( x._ID )
// //                                 , local     = client.language[ guild.language || "EN" ].youtube;

// //                             guild.channels.cache
// //                                 .get( x._channelID )
// //                                 .send( `${ local.newVideo( channel.title ) }\n${ video.link }` );

// //                         });

// //                     });

// //                     // —— Save in the database the id and date of the last video
// //                     await client.db.Notification.findOneAndUpdate( {
// //                         YBChannelID : channels[ i ].YBChannelID
// //                     }, {
// //                         lastVideo   : toSend[ toSend.length - 1 ].id,
// //                         pubDate     : new Date( toSend[ toSend.length - 1 ].pubDate )
// //                     });

// //                 }

// //             }


// //         } catch ( error ) {

// //             console.log( error );

// //             // —— Do nothing in case of errors for the moment

// //         } finally {

// //             // —— Repeat the check every minute
// //             await new Promise( ( r ) => setTimeout( r, 60000 ) );
// //             update();

// //         }

// //     }() );

// // };