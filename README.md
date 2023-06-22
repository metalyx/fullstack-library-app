![](https://lh3.googleusercontent.com/fife/APg5EOatu8XHdgr8CSUWhd70TValxwvV-VylML7xxfghp5B46biB1BOcyAg_ChqdKj9voyW-ViveZxkBh86RvzJZeuEZQ8pFf46YAPmTSfMrh_KkHNX3VMWCtMVbmOhw3IsEtDAHRhOWy_QXhigkocNGQJHi631E5_BewlUf1BtTU_IIF7TgvCpK5zk5DkaUfQ1L3t6s8O_UGh6uBRc5_5ajBxirckS3POUcJioZ1q027Q2eZn_dw9KX7sAICeGZoe8VpyMqCG-KXcYsioCUUJAY1DwOqzxNIIByI4HX1vrs7MhwO8ZA7S0PISJHt-TDvXpD5aSkymrYwT7qDRaYMyiTHNNMEdZiqN_tXNwgQH_oYap8rT81tfNfECSjR4WZhdmV1RrATouvUehld7HbT8zbFmqFc4sSoFOtMv1dSBW0H4yiKZTZ7pdWvJ-GaHntMH2QJ7dlC5dfPzPG0vs5KZcZheUaltjAO6b9WhNAJd2kQc9rtGW_pJf6mjzQSIYhLRVzrE3kQHKDMp7OslWDrsAu6Lnn3pXvvbxIhreLD_OF1ylWKM_z9p-Ym-yScGdyAK4yEIaKCMYYsQg2x49ngT-AjC-9VEeF99ZxfJFdiAqwNJZcRp9J9FQA1UtVkWWHkqTOnc_NXm0o8Y-BrPOHonYuVzi8Lecxutsqi4R-jQVN1Kv-X6Z1ZesHxKpXvFQowCCcKYMwgFmEP_lXMbISNfRteib-hk4m2AHAZbntMWG61yrRaxXZzpgy5K8q7PHzXNUM3dpgxBDHdpwRaQrMaK_cXFNXgftTaJLaNvCfAZKcch_Uq7_OEKncQVLrADV6pyFG97aS1Cho-oVi-u3LaH1KWX7Z-GjfN7pqOdUT_R0tFIXuC2J4PqeSIVMH-8faKAbfBUlAh_W1zOG7KMedHlYIDCz6RdOzTv96E-2ydMXh9ILJkv-5dvUZ7gL4PAn6uVP0EbJlUV0aYOW4bb42ltoCrghMS2BWHyosNyPhWyvW2WsQsAnDV5QDwTwZ5EbeNot50EnJw5g46Ktyp8CgfcW9a5jPz6UUMGYRcSrmAXw1Z85MIPwifKgoQYpNVRA0BK6dB5YSIPCDR5C-hjpFaTk7HA7_kYerORQom94OiTxCLwUmL3HTSxaorSJM46zC2Rtpi7IhcgX7nnC4sSHxVmsK1x6oxVEnfyI0Fk7_Aw7WYKvcTzIS5dnGiLyIYScM_Z9NQefTNhZ5xdXqWgOxZMYuTKr3195_gTTLLiMAqVKaBIfIrmMC6zv-oFGWNoCLo4kxK6_lXfAp8N1HtMVDcdIzsIk5xspU2EVQrS8uTq712tvQ16XzKyJItkrJ4uWCSLi8MAeKSUor6R-ffn-0YgBLxGMxkYjUgEuj1g9hGL8VNSk_W7FQdo1g3Fjk_vnqqRqzp8oQAn9fYCxwwKCRAuOP34dVkXdMwheKS7dEOlc3iKGJ73EG3vQ-YJqNrPMQMWMJhorCTLAU_3kVibVMfVMj2ed-g7F4gU_PBCpdGIp6kw2ahZnsxBG0l9PsyPhIJDKWRuv1WMauRKBsz7dAm5OvAZB5oU5btht-5onta8ZcZUi1KuSZ8dP5r0fLh16ms68AUHY6orrwv0gJxHnNDQ=w1340-h951)

---

This is **MyLibrary** Full Stack application. It provides a functionality for a typical local library (such as you can find at school or college).
The main features of this app include booking books, storing books, creating users, provide functionality according to various roles, authorization, etc.

You will find detailed information about the app in sections below.

<i>You can check out the production demo using this link: https://fullstack-library-app-ij27.onrender.com/</i>

<i><u>\*I use a free tier of Render platform to deploy my app. It **may take up to a minute** for first render of application. Please be patient, it is expected behaviour.</u></i>

---

## HOW TO INSTALL?

-   Clone repository
-   `npm install` - installs required dependencies
-   `npm run build` - builds application
-   `npm run dev` - for development; concurrently executes `vite` and `nodemon`
-   `cd ./server/ && node server.js` - to start backend that serves static react build.

<i><u>\*I also use .env files with secrets such as login and password for connection to MongoDB and JWT secret. I cannot share those here.</u></i>

---

## FILE STRUCTURE

Project is structured according to provided guidline. It is a monolith, meaning that both frontend and backend parts are combined together. The main idea below:

-   In `app` folder you'll find `React` frontend of application.
-   In `server` folder you'll find `Express.js` backend of application(API). Also, here you can find production build on `dist/` subfolder.
-   In root you can see various config files for `TypeScript`, `Tailwind-CSS`, `PostCSS`, linters, `Vite` and `Procfile` for `Heroku`.
-   In root you'll find `package.json`, where you can check all the packages that I used during development.

---

## HOW TO USE?

Features that are available in the app depend on role of the user that have logged in.
You have to sign in using corresponding credentials below to be able to perform actions in MyLibrary application.

For now it is three different roles. A `USER` (basically new user, has minimum rights), a `LIBRARIAN` (staff of library, has almost all rights), and an `ADMIN` (technical admin / head staff of library, has all rights).

<i>List of credentials to log in:</i>

-   To sign in as <b>USER</b>. Username is: `user` Password is: `user`
-   To sign in as <b>LIBRARIAN</b>. Username is: `librarian` Password is: `librarian`
-   To sign in as <b>ADMIN</b>. Username is: `admin` Password is: `admin`

---

### LOGIN

First what you see when you open the app is login page. Login is implemented using `JWT` on backend to generate token and `localStorage` to save this token in user's browser. This token have a big role throughout the app. It used to decide what pages are available for current user, what routes of API you can use and more. I have validation on each field.

<div>
<img alt='Login Page' src='https://lh3.googleusercontent.com/fife/APg5EOaKZfLjlx67qZd5ED5_2VspE03MyIOpClWVoi8AVq59wczM5sNkmo0uwrfVTt9Aa6CQlCXKoDerErpf1BwkCUF1--WynJgTFZwapOK25o683g_49HKWQoc3y6C9kv2wR1M5J6YzILpAsFfx7yCAwzkO01-i7PkHkrOuO2zImGAFcbjU2oNIr5AxRjxcZCN6ZM8FyXCBViUgkx_9XDTVjImLts2Wt-4TAs3wfhe4hQ_Y8XPSQ_j0vV0Fi5_4xNu9c-0s5_2NQhsKa8XHGogIFxdvmAd3-SG6lc3RRgbLTDRUiWw40gzMe9Yatu4gk3Qp7B9s_qI6Yzktmza3E40plKE7fpJE_MsvFidvFWnnyt7Tf4fl_tEA-iwXsKKLXv0MCPvUVTresQw-JMzI31PzBRe1AHr61y1h_X0RqMlZeN-9NLVoCjX2XpGFnxMvF8tsX_C7vMn2YG-qb0G_YCYtSrYzwauMUZ2PS2Pn0-dJT9iH4sIK2DHC2lwhQusO_IpF9lj2F2gsyJOMe15mKQCXrymmrib5_gUg1tHxaLU8gEARwtu5dDMmdTb9giQJECK7Ys2O11RZ4ecwHC8rqEZHCM35vRWUcuu4no6etiR7usSnRpqRnc8HT9L3GYvGDUSVyhLmt0YWVFZK5weF_cshsIZ4PaXE_NRRkQ0BZpdLucdn8eapHwniOyVazG2LbF8PzKFaaXii9NWvqszIsairHuYKqbS9zHzfElXYlCTpOkJBFZqgmm4n_6Q0Xk5Wrc7JMKRXNwjRwYUL1joYNHlXopnHwXBCdvxvWlKY8XYELA0DvSNTnS-NGxDZAAJ6cuU1JtCyPbDn1ocaHOPS_HHF1hM3LeU4Gq3XV8poT0KTvwd0tIapZsCeWJEAOytmlE65t_jAcsgqxWmI8bCz752DljCQa9E89xeXU4YnmwZXeX-rvQ0-Uq0lRyg5P0CLS5IpY_ubt05wa7kINoABbs9COfNtrWLs6ZeJbtxh1_B_JsP_Hi-JS9J6tktAMWwpw4MdBdnDI3xCo-HblhHX7Q3KZ8eRGXwt2ymxUhfhFPAqGfZjtMCzR-zzKnY4sQmw6N8ElIomimiqcpkEzKERSwJZQBp1uNeg61sqxxzMywrdmkeM4y4fjrDGyc3YVu7CBTtd0YBJWgKPReS-4lqXijhZL2t5NTJo7nPgf85cl2ww4qEgo9gY2OL82Xe8kBV21_ZM6b7i071g01h8r-oq20uKErKVH--Y6gVcaLKEob0akbVmhHmxCSBVxzKqeq35P7e8UrcqXiqd-jSMsj5RVyLXo5ZkiUi1DgoQk70NDicVywpKJGMSShiE_Z7GqVentFs7slrDiVazgApNWIv3D3nIISh-MPyzbhxTfGiP_Sxic7x8jJsN_B7XAevCdHs6IYBq9_L2jCj1M24W03RfUerIrNxsjOQCd3TIrac_eGO2ntatepLv78CaS0b7yHkFRT5Kyhc0CkFe8IUERqU2j_yMEoeRR6rxdgpb2npJVYfh-XFbpbseC3lFSCmXmrsC1va8yraVD1qPDpMnvndbEySLIBp5j30Xa7hHd8jDSj6YEg3WFQ=w1920-h969'/>
<img alt='Login Page Validation' src='https://lh3.googleusercontent.com/fife/APg5EOb09qxHD9czqnGER78nbNyvUH_XqyS26vmmKXddwYU49sJUd80AnsSrcqgFYM1y1F3r_KLMMq4gDm51cWEyBLmtGdTRv7vaOZhxjdvYR8ML2kUuHoOTZWGXzbqzbz3PVybC2ZDmHbrBxZodymhQvzGXUZ6ZOg5ebhV830JpP26wD9xz5San9rRhs5UAS0Qxh0zgyewNFaqUjU6Fk4OzGJpMkh_4pW0hN9vmTQtImOQM1LmoIkxPBfBc7yQGeCwWQhxcsgMWmdrZaks0YlVM5xHxZdu_kJaeMS-Kkv04t8lKJOfjDpmjLtn-RuDXwACpxhO071v9F0rHcrXegyYY79E5aspNP811o0zb1lG5_evPyLmgqbPNjxn69nQZbDPe_OEQrFFspTS4eOlHFklN1Q8yzhZCwgA3GwFHTjxky03ddhFPdv2Q5iaxqr-O0wsD3m9RWWo54JNF0jheiOenUv4XDoSVjTSqQLci_QWEgM63Uo0Uh1ysXtaToFgVlbU4HpalQ4oC-Dt2ibpBuQJaxeKQYZ6l3nYZ7Mxvs7fEveQ91wyWAOZyJ0iaL1y9vGSAE2h1q_TSqaB1LLk4Duu4e_U6ZRrHvlpKmcZO5hi9CDzOqENaRNORYRkUXfubUOgoCtlQUwAa1iply9C9mekv8q5NULbsF79HXA8kAKNxbZ6G82jtkqg7WzxEUqgvmLBfUVjJFKj3WIUTCL2IupIuxjfUKZJx1xoVqQSpEHHn2mlM7IVXp6odCby31WLveR8TptU1mNYnKbIOVsBTdVadVYO_-B2sigBNdKLWF642Q8y6FrxU35Rei2Q5QS98zMSsPoVkYRt4ehXES1PJ5P2Ksf1GXwZHE6B804v-z2b7Vko3fGMN0Z4bZ3oAZBww0E1E5rckCe0BQ6YK4fQo9LM1DiJT6uvb-1xOVrCNvqmhzc_iNfh--ANvGgNYV_CrgPDXCd67t4p4ZZ82pqLYK1eNElVJsN9jZI6NsNB0XY6l937KjJvvM8GMKUZotJ-oVR9B8wa7RVd0Lek2LCPsugWXuA5qDXtkpjk9SYV6fx8vJwllZoq31PrRPXK5Dif-uYIfDjf9wKugWqfOczN9-UUK21fhNxGBF5fKsOc3OMSqT-kH-wLkbO7DX3LFy7Xtla6N9feQ7F0cCbFN05eU03Pu9Hru94kD9QFkCT7EjWwKPTSllgNG3DUntW0n3ZWDSA455UoE6SgIoqGb3kSkhGpPlzkE7pWVPms4j-_Ebc9ZLIdwYez2YlhoCKoWlyPufZXVsdFScl-WH6n67HTKGqlF9W5K_AxDm3da_hYdduRZ0n1zuJEgAX1w0Uso5M86-Bt4SJNmDidxYoA4-wapxQ5g_jF7qsi8a9AaHMh8JOqdGVw1dmFHXFaKnkTBAbxy5ftcF33Y5P1aMHAaDltLbbuh0sNyr8QbIPAR2M3P50ZrJ5PBmnII-iN8r13XIL_NI6vGTREUYNb1_cMiiR3gFyQe5ke4JPeAAIB_L3nx-OIrpSgpn3EI9XJdFZ0QiyNeSlsl_QAZ_a18ju5SfSZcbtGEhnzRo3TkkfDNFkH4aBi5tqbGVA=w1259-h969'/>
</div>

---

### REGISTRATION

Anyone can register new account if they don't have one yet. This page is similar to Login Page and also has validation. In that case role of new account will be `USER` by default. To create `LIBRARIAN` and `ADMIN` accounts you need to login as `ADMIN` role first.

<div>
<img alt='Registration Page' src='https://lh3.googleusercontent.com/fife/APg5EObb4UGUxxR_6U8EHvvpK4MI-RgGTnd53MXaj-amx1INASec6tfSEcB07HW05IEtoOSIoSZziLckdb6QcO30cY1EayEootYrYzWdw9G_CeLX-OCL3TS9Cgd5EnGROfhNcU8gprQdxi90zAFMPIMaABpzLDlXld2PEvertj0n4A-56dUEUMGZFy59pHOprvkeY6vSAlszIjQqA-S1Gad-gtSC-AsG1C20oB-BX3rrlECIlxTTCFKz11cNSrX_7168eHaOBNOiVGFbbmN2OQHdbpddbL_h17Xn0TT0TDeta-dtGrv00fKl89MqviqORnJ5Z7IiMPHrrji6ZWAkhDNtm-MaMagZ2dYqZ8Ze3UZhMdsGKE6WINLmlkoLuR5WLlkUi-fRTQo6lWciQcfe0lK0-7tKNTLWW2bajNQDC19QWok5Lfb4UgfKt7sn5azVRR9AE1T9yS8wUsdBSLKD24Zr_wy5nj8FeqbTk4nkPy23Jx5Hw85Ec-2gTwLGXiZkzM8UbfAUQQYzrAph2ui1qc3GdgOm2zHJnf_YV3PjXqwNe_5gRSTpAr8Knourz7sgTBMYvdATkzce0g-iZGNGmgj6fQpcVto_Fa4dVqhW7R7JavcF4Lx6o9ZdVKqnO0YFZlmBlL25KwXCft8E9HFeoQGgtXJ9lVqUG1a0QWQ_kXLQTgJK0vGdPeK9koLfxqA9HBhe_o3T7__sumeWMk6o9y3u32a0NFDegMJzO1MsVUduauEY7zyxLkYUE2amgDHrc9NuiguX-R2iR43whSZdoqPNuAECzFmBVkMtNZ1EpVTcU2ShTDJYSrubwK85Bx2mFkhrSAYGhbFzJkbWBwRYMojMc7vJQKX2yk_aWVdIQOVp3VwoEGLdIKxAXvYZkkRxbEP_e-7RYHoCRLAhDBD4SQ9iy7ayxmqvMjpwte5ZSOP5JeBiqvz56SgNcXCiKrJLeJq7JAdNDzDpUtd5WNVrgGHvsTVploFG6SJzu_9eUz81mIwpmSGktJEB-njnkjM0og-Xg10LsOwU3PKAtB1nw0b6DSko3Getw9DL0yegEANuiPBLuUYUJVksJ7DQQ9dJqubaEKF9f822kD4mVACvAkd-TlkMwvOMNl8MZKdcQ6IDJk5ob1TlcWDOn68O7NtY_LluOf-Qxy_EKqPsuduoB51nxPjk76qd_0ScdnGlQUh1dmX5pa9-UnhZZxViM0JTK9u4orvYJgcV9Ac-U-9KL_thSi-i_fNt-lsBetkIo8uzJtmrMwPsF-gELQgTc4DB4TWtfTs5C0_drMRFKyej--ZD85NY_9bpb1X8eZVIci-WzNg1EaaQdBNMFjg47tHl9akNfZD4k-DMjDg1E-JUjxyccRZlwguoEaDFzanxLl1GCF3RWoq9BJKVqLbxDw1P9V3NvZsrd8SOZq5GTcej5j2w-pJGSLt2Ve5AbkCWfnEkBQKd2fhGj08GpE-CyoBHrQDj3cZP0JJDb3IkCN8BHLBOW2lTtbxErqqYaT3ptCk4rCdMchYNqMHzURKZN9k679_F8gGJfBpJS1XyU362nVV8Xl36CfI8EGt20LFJAePaHUqjxg=w1259-h969'/>
</div>

---

### HOME PAGE

After login you will see home page with mock text inside (this text is subject to change). Use menu icon at the top left corner (in mobile version) to open menu. This is main navigation throughout the app. I implemented it using `react-router-dom` package.

<div>
<img alt='Home Page' src='https://lh3.googleusercontent.com/fife/APg5EOY_BOoOjhuy0dS093ExOYRY8DiAv2vQemswlvVMixnxbCtBA1eBw9Cm8cPphKXuDyqwtvPfWnJwJ5hBts7z8t1PFmyPfW_Gg1uOTz0-iIaS46xyOXrfNSGiN-kaPV5UMlLjw9vVHus3pAQzZ6f66D-F9xLu8lXQaYrgm_sxssIH19SpLWsL5PjBWxhlw00ZvIydVcL8g22tUNl12In_Sg-UvMDuBMPIUQQe1srM1ui4hByCnNqp2e79c__092OKwmF0WsL0VRfgA2BhVrPjlHC-MnzW-9uZy_o-ETRlvQoSa8CDnK3W-9yfkigjDnBAYZL5ooFPgZ6ffg4kWbbMAtzkBfIUYTgUntIwsQkVlldmlGZZtOyt6SFlroN8XUwiXNxpFimGS3KlEsJ6--OeOEyj7W0cBS66a7bG8-RNgbd-nd6Y86w3egfrmjkDilun6mQdxsZMamIOnrVKd_3DxbpX5ROufBHMaq9umWtdSmr_BJSck4H8KheEzPuLhtFFw-WrOioJVckmKNy_Fj3LPkQUwWfXW4nWbV2Np5Bgn8TVqTAmo1WdrpCZrIDvqRm9YJN3F1oVC2JyZWO120UEwsYd3XudLTVIzDQt_qTy4C2ntS2_u5PIkmSda87sRP2b98HnRIvRZBMwEYC7g8G7fYijmhj-4jjdSQa5AVHHLnf1ISKcGY7_7cuuehgitlutqet8nAh34lpzzeEzgSDukiQ7Md94CljqmWOw5jggU-LV2waA2novIcIbd4gxr4XI0fCmrcvMKkz2EZ68Raq9L5-_XoZODVn-COILd1sIFGxMHnQCZxaxyRKvNDIARV1rZtp1-ETjb8NN5l6vs9jg25Tqx5XA9Eij1VNmulzmpgv0DKasrZk5WxfMjT2JtKQCrm9XfN9niyanovb0W2wrEVhP9h1yZCaPuDX8Bwq-6wpo7Ys3mmp6ugryx52B4v3P4fshzpEWB0KSQ0K1TQhSTmdqCRcTumdp69iBYrnbfJPxOoRP56EqBm2uZs0H-PPkIyCY5ML17WbDkD7W14IYRRU5YtycENTnX7_M2Kz1YYjHbcRBaqlhKu2cg0iPB4Dig2zb-pH2air5G2eKwftrxY_fiLPGWT3qN4COe9tksC3WmsPg1Jzpk9bDb4Dy61aZzN_omfSQr9Xc6ilrB2FbqU21KneYSx8XQm32KyeXsF8w_nLlSEONqCOJ96U2u8KosGIvIQFcTls2280ckESG2F8DFIYxmN3QYdSn3ovrX2uIHoqa_Mgzlj7wYcJhmELEHT26XN_knyGDLd1UKgy2gJXPQiHVCAAcycx-xPVlGW59_ux3gdRAKeM8g1NYcVsBzXNar-3eIMUMlYpzjjvlAExQyMSrU5jdT520EfjovJ7RpOQGrYbVHGmOYMr5Yq0xv049aatvNZkSWHz5LG87_F-XhOhfjvwcdf9S2_QCWFFxx8d3egqG3cttTVX6_1kP06cXKKtNeAKCyZG1UGL7gjBSYS_WqtYwxJSPv3TnKsSEi6lFFyNr6YpO0J2IsIKL_llJWXpWmkfxu0XMxNM0F9yeTNLdpsYeisCoZC5SK2ppSg=w1259-h969'/>
<img alt='Home Page with Menu' src='https://lh3.googleusercontent.com/fife/APg5EOYaE4QzFPcIuXDyX3g0J8RsWvImotHGswipyNWw5YZYNCwydrv29ppx43UYA56d7TObQcKMErWqMk-qnkKuJ6SIbap5rSGHHPy_nDcE2OIs4tj_MKFnvIzlalbFx2E2lZovtdBTt8W-MtBbHVYvSiF3noeTo9R6GHMuFn7yMo2doujrUEIHV7TEYICy7vcK5ONlDhRAm2EMMNBxOj6PT_n0pGS_UxBVthuI-lld1AYmhguB_rXSL8S68GC09gmgUq5vX911_nlnXRLWUBeIF4s-kzqr2Uc6bUSs1B_2WWqzyJB0WG22zH2T15quohDkKtPOljFe5YXUiOUF3HjZ1miK_Y5cKhauxsCb1hpm5WgLVy-_VlafYIfUyd7lZfizJ2dfz2v54ZRHUM0Dq_dVZMIRUKFI2otaPDqewGbArZ9yfu4TFHVVGA2jsjdIdzIpSi6JcF8KkO5dixQWYnbJFz49dXkgBjc9BqBEVSil8pvBj4U6B6CD2UuBK8AtLrEbHK95HHQrKob_bGWkTVFxn5_azvooTy5ABNQB7jiGd1GRSD8Y3Xnl9mx5SDmE5zLCON77mNAetzXWb5EzaGJjR7qT5du8dm8kdtmzMPMDt406gnBmUV4vO01Ujh-ynAh2FHMMiQH6mSLsMZ7_g_WP9vN2BQDM5myqbHKK_gKapEN0HUgVAiMELv0y59o21N6EE_nqDC0Re4V66vGR8ywtZ96Nj9OQfbIRJ1G8cqiHy6mupeUGDlDS4EAoc0VyCBXMakMcfUiZadx14rwVA98Cmb_SF3EzP1hrBetcw3f3635_KoUIUjc1uxa0JS4gCokITDG0D-ENKZTx8rL14rkeWbU78AVVgF0fef-F00cdBCyXh5OCQmeiDwJx9rtVerK8y9hH751l7MJEC9mL7B_TUO4_RFP04AdUfEqtXF6Fjq-tUOmDpk9Hum3-06etMADIB2PjYOJ9hypFQTHSOWoVeffXh0zQHuJ_jKTTAdEHA1J0qY_zNaFs8JZ3iWCNJV1VxxAYMgJRG5S2r3FpFz1RvuwCoswdknofCH0r1Pl4XTpLiLOqTH-WYFOtithm-vlvqfQr-tWuFsPt0rqcvUZtZFSrdKHFoeLUMiZUlqlfgQanJJGrTXgJFOHUssYrOnSVYghAJSjs5mBJSdf8z5iEPwfnVrWFpwGCYPlUKnZYeDH5VKtNUQx8EzemtmhA9zr7cPl0LLW_fcWTuDg9lE3l1GbwB0mL__pxebiyXtEFN89-4MZxfwxGJmBnZRl7DJMahpdNdxzGUTlX3zsMXLR4IxWGjw7kZ5arx9EuKtNE5Lr0pt6CunIdnHyKZU6PMc7PmHN9UNVemRvBXG2eAfUo13wNrXkaoZ-M37meqik64x2w5SEtn4yO5hogZNOLAuNy4iAy3KH34e-uYxArbMTYheziUlbicJxaGQnEEpQkcW8Q57Tjyjdly9RnKoJPTp0jydaLdj9yIsmu9dIE7N5ADJYBs1UONVpONFC9MAKAfSvLQ3R7OEdPdmN2DMykquz__MkXqEuA3rlyQ67qCyVKzAlmBVfU5us62xXOxACnr30uQg=w1259-h969'/>
</div>

---

### BOOKS

Books page is available for all users regardless of their role. I fetch books from my API and render them on the page. You can see if specific book is available for booking or not.

You also can search specific book by its title. This implemented on frontend.

\*<i>For now it is only four books in library. I have a route to create books in my API, but I think I will implement frontend part for adding new books as `ADMIN` and `LIBRARIAN` roles.</i>

<div>
<img alt='Books Page' src='https://lh3.googleusercontent.com/fife/APg5EOb9cimNxuzksb7C3IChxuOkPUV-w-WiHpmGgzRej3fYl7baaFAcT0S8pDFjpXyPLNj_6EZ-afmbzwJPuBgH_6yYFgOgy0i-tK4LO89b4ISFDT6Aa1RubtD7kf4ZiIMpEtsE-VBMDunGjot9ImP0UT3K451OoGSlnjIUeDaiKcFY9PJ3FKIoIjdc8aBFv5WbcifVJWk1wbk0kBmPJ4l_aMciNB0BzKbl6lr2EhkN-f8I1X6aqT-dtEvFGsIlaFrffI55yUqQPA0sM0BA1v0l8ceDngS9x0ZTHKYY6okVJdq4CWNBlKHTwp5h5RYhvmsYjtzHEruGovohG_Njp0VwiXwDGbUjVBSHRPE109TipcjqOWAeA0u8DYCAL50zGNjjP9HODkGxj-cxHK_-YewqTL4ALEhImhZ0i0DJor_H04wv8Or4GO4gkNXQUz2KkDGG6EUgCv8XY0zUJ84q7Al9IF7VZ007IZTlhHUEiIFdOvJefIrsu-KoHiLGjx2zidMhmfcyL3sP51Z-EWwLN-guhPibFQ2oQL4z4RvN-fDr89RsGcqOmIBeuUgJ0btlrGKTFSY_m4BfT8mPace4Tctk3ylldi_aRUgjVOCL8IHrc8OPSLkqNa6lEi-_XSLl0XcOFhlUM9KH4ncIKZrxWSpTMN1BLPD8qUZkg1fevhcnJLpfO9Wvbcmh2XUP-KyXwKeT_AUJjnq-cxI_i1X26Vy3wwCkzkEYXSF-BEycyko6bKaI7oDMvlaUhdQoQvnm8Jl8RbWamHD7nCzrfxdbnmSew8CJ9sxaQzRIOPvQUHG3KFXTsTB-CuGHKYBoa73ZnqNtrll9ZJIqXJN2Pe3xX0jt01h8S4RgsuJuSHh4rLij8fEJ0CymiE20Qx77AmpEPMDjaT4SVdX51DAnqkU6RooNAmjfiEKn0H1TrWzcyo_kHXsJCocQAzwmOKeYo3OtlqqUdnEyy0dOvHK-iBaVrFmWDbfuUIwEgAM5_HsZv830nVpk33-8LfA-7VSkR0SijQWRvcbPFcICkxTYfHrzm9cBC9p5D_da1Hs6w-xH8wq_1lQ5wkNeOfk9aTCNvzrhc56HV9_w1f0AfinriMkcYsn53fYZ6NOE5TohJrN-cIYOTEnFgn6Tj1vQzbrPQvjoxPtSIoAU-M4q3au5tRDS-WBiO7VxswiNzPEtZQQ5gyHoJj2OUqLybs0x_lkGCNOKIhDsgsPa-CGc59BI79g-K9TidMZHU3uDqI16Cn3dH_Qsn2xQLCQtMHy5cT_6HyTpMTzkZ5lzqnrhGguuukc3nZZtv27Gt-1oyQBaZqHbUr5tMx6CccwY34Sk5IDOpq5K_N8_DE7jt--s5M0n71CesQbgQPuj5XoxaDMgUG8max0m4BqVgX7J5Hj0hTtzifOp9U5BcKkpcnO3eCpBNdxdJdHKzIJAJLP6h1gOUBjru_U5ZYF070Hmb7xxh4tABY9CWQ7DF6yavX4ClIcMHl49rpmOynd5XNc1vMqhYSpEZUC9zzhzSf6k1DakxZORf-QVuJ3mwf31RSkOCm_g_72LucfakuleYqd2L3EJl3TtBqOTSS0N9A=w1259-h969'/>
<img alt='Books Page Search' src='https://lh3.googleusercontent.com/fife/APg5EOYCiluoVc-P-EuP70yYStHybA7F4C4RE9YCVdktCtPhOt_gQhFZpUQozH5W8xRngbOc6jDU8QBNfWec9Nr-MJTRuCZp1vqPYCOFtWBPI6b9jTDf3GTagL5pqDaUXzN6egr9ZvPIzvi-9b9T1xbtiUW7PeW2aN3_nQkZhff1yaDrj1sZhVBE9VxcJvJ6VlU6v1Wt_mooJRkcakCKPdd9WjtoQkk9sdedcQ6T2hthRWCvdpLsH28DxgvKMOIh0io6ozxeLWAG7fmQWq99WfOQQUXzISWdZzuMVKDuZw2cJ8Zj5_NgXKp3WnqG0_JCmKkm6r2uz1eReGyGn0bb5FfPzI5xpwWdvT6_zagXu5wY7k49S75ixROBGHAT5LGUEfAEriL-j9dijtFprC0vLfSJE6h__KWQye9ORluwdcOdZR5aQmA7DLdsuI3XA8VByn3YlvWEU4xN1DdX_lEP93JwTMFQokurbdGIMFdg42RqTB5AAdTDkr1ZnKN7sEd-9-l-da88mJT68yKwOA_qfYXZQQ46l9AY3OhGqRHZ0YDlSB11ri459CQD7xu3QBpVaCY20x1_j5tLNKUtRr4a7gjX8fLsn9MCx_IUD1QUsX8fvWd4XCG27ytOfpjOYZZP3A4nkTkKWqCMQLEBpk8MLlRDMSv4GcYqrh9HbftMwYbLbvyoguiYsOEhiAzZBvZEAYNdpZn-xl5qW282jS8ec1k7jqRBaa1hwXRxTVx68KowEwidbFKS_TtGMIoUm6NTYBAxVvf8D9X0H-InlTCbZcvJyxi-JeVCu8VyDJHuHIF7Nf9mIOiUlZKQXuAwYb8MXxrlCV4o2YwlA2o7jSOgFWjbFVE8oYGYPa0NJvihAeh-_0tPlzYgQu6u7vXpWjy5bVmRydtDCatY0NUYnXRvalb2NJoEyUiKwDWe3UeuxQJuO8sminS9EcPt0QY2WKPnMSuL-nOyBIj9R8hWuv-SuEo66b9sV7VIqTiL0aIbT8qBCxgARFdGVlZHOWAZwW05QbEdC3FGiWHf4MoaBsAt1qqeuzwMyi6Jmw464HUCT7tuA2JmbXIJPXl3mnAD0LBrpwYhN4c6_ogR8fiJlhvfKjdimE3lK1f36J8Jrvh380qxmsg_-EyTUqauapqvYtZMti92Et76kL-FAEOQxpNHaS1dl_wOh3xMXZ7Bj3laCMi0FS49Cu-RXrAGC6Gyna83gUCk1G541PUBEnDVohcO22-cqDM7YiTiMb7YsdDmzk36RuLqU1KsD8qJjP76N40gyTBxzuFAO0DntuGvstKO-MpaURbsEqbiITs--hNffuOsPRIOPbZNCg1hpkivwOVaQcfEFHEVs1olT0x0yAhFHr8G3k2beJSFwemxq39AFb0_SP0uNjTpwr56-64HUd4U1QcnB9h4Fuopk3_peelK9HeHEnKR3j9c3mRkiMHix0gxI6h-KYERyTaBDglO6rvcWXM0jGIhlpAqrzzufV-us72F9eFArZPQSXOqgcplbPqJIxvqslyBbaDiLUSRhdlKtMNzy5M1-a4Rm3cMYku3ukKiFQU5txyKKxazsV0j0Gg9gg7PHw=w1259-h969'//>
</div>

---

### PROFILE PAGE

This page has a card with basic information about user's username and their role. This image is just mocked on frontend.

\*<i>In future it is easy to add more fields about user, such as E-mail, phone number and other information</i>

<img alt='Profile Page' src='https://lh3.googleusercontent.com/fife/APg5EOYKf97nRl9WSdH4o8IQtRZPQ02pb_khVxG9XfwezQYqWhosHp4qNgtmlYWHVuyLVIKWu3hAMs4e8dIzMgC8schcHO9X_KDmMs2yavWvM3lhQNiIdtyDw_3HROeodHUKelcVWv2P0EANGg_0KtxT6ZeVfk3cU5SCBfwhsxnzcrqXEjqEax_bs5PW9sXKYvT5TPrduzgvO0o3cqSOnaQzjk-eDROKhMlVVVGAabOOGLecB1XH6ExGv30XYO9IkpRy_AoONZtNZjkWpbmlwCY3Pg7JT9BKksR5UHQTPUDasLfjbJKRcPT4T2AClolh5zJEhxHmwoh5Vlb87NRUurz-nitcRTeOuGk0vOCmcuL2Z1xcnDUtvuwTS9N_cqfcxVY-UiJHhnj1iNAPPKE-P_xlBUedx-xAN9qZJE85WcNfn41kCmGW8i-qVqwy32JBz98DKDlzzzXnqAphpPEuSmAS4Qw9Yw3q5nCBeZY0wlkOEEYZbgC5Kql2wt665nmV9RErfPfg_KQXEz-XCVa-bz7xaMHJAjxSdKVWFaE9Toz2pEc0j8kFepARJJwApgenhBd1kZXRdf97aAEacZip40DD0PI0WxekOoZz4eKYiGLT1DYafUJ_m6oTVvGTh4OhHAikZlEsWVdO4cRfIWRQWcKYXx7Z2pYn_U3nep0nWx3ySrQUf53opkGxxRH7LzlVWJyij5Z1V7IJ403r3UtDiUMp366vwuGijWYceassMHp2jFLY4XT20sdI1fzTw6k5N2yiLfEOVnw7gcKbHCY4Eb80lWACL00ruCrlOVz7AH68iWHUGvescUc__ZZqSlhuf06__Yv0lEdUL-yP3K7mKyCt8wRRGw7dKlpvIOASSyOSiNosaSKAj86nCQAFIds6ExMgsZ3QZ4uuDKIwOFhrVqm0y6db7Ac5Fw-I0yCuseyn8izl9y7Souj5vmLAr4Takqip5TPKZU6ytOnSduNzSI8TrItRI2jandR67D3xVo24d3bYmm29R0SqYEELleVU50XHGKIA8pXqkzp3dD5J0J_IV8yE1ygv6JoWMpvJQxNy5IWbDkig6DnBAmC3RJQ2jRiHfCamRppX2Rwsgo7pM9XFmKHxkynPrgv1r-DohPPcbWFBDMGP-B5wiEe4P4_SigQHfv-AQkfcX37vKeY4MzYTDyLYcdenofLCz04bK_5iCZYla5M0BFuZ9knUucLZCjxPJdL4zVB9QOTJqKG1tbolslYAi9ClNFueZDBMbNDyrP9euHLQRdNEyTMQ_v2UpWBbOb4-hLvaQdOge0Qa0NPAmKzkuv_FM1lNUNuYjVZeENvJNkNqEhz6otJ5CWKxPw6HAtfLpv345Xmk78DcVTMOsWvMvVqCgLD8nLYXTZ5a8N1lo3BMcsEqUPSwpxOZw07w2hjQzd2B7kDNyzhmXAcbW9AdwvFcNWx7sc8T4VKO0rECuc81ewn0ZlGx66PNFRF7DhrZunMs9ayWWjIufVBCchbceo7YsyF95pgQnzY_2PBfo-JTXO8TVWNiqC43bGsCRwvOMIFMGIJC3cmxg_TJXkABvq6cC2LGNcgDCE9hSonb2w=w1259-h969' />

---

### BOOKINGS PAGE

Bookings is the main feature of this application. Each user can borrow a book. Therefore this page provides functionality for **viewing**, **creating** and **canceling** bookings. <u>This page is available for only `LIBRARIAN` and `ADMIN` roles.</u>

Here you can search for specific booking by book title or username of booker.

Check the screensots below to get more idea of UI.

<div>
<img alt='Bookings main screen' src='https://lh3.googleusercontent.com/fife/APg5EOZD38hJatP0pkmuuXs1oWo1mxIuKAfca1CUoreFro1pYq2MHJEIJt1HHqgXpgjfdaG6so3vJHF2yE-K9OI7ExXivxNK0iqJZRSCM8mkbgdZt2u48TgflqFpsmpluE9A45Q8cIaT1H21YuiKyBQD16k8d1-yVIcCCMY5yYxdC5qGsXsBeZBHUnp5Aa2R4kaymm0_-QUPJn-fTkBKV5HMoHaK4F8dJXHUlGXU3VMdsy81GkMnUUlDDPlXvwuWUfptTY0_A8QfMZ9C2sMaBgBnrnvk3Owu57qvZHVi_vy9au-4KK8RdNgQyykCK-pmIszZhDuDUuUUw-ywaroeFkw_8byIjiUT5k2ZDHxx8OVo8o8-FPh_JgbwO3tBraOV8NU3PC58YzfcSM-SIODyyeZ9SPXbxxfud6jkcdbCBcYQ3790tJRx8SfuP_MLYzfuFqWpSekXKHPvwsowqbDk5c6Buzd3kROqvrsnil3-Eiur-i8Q9EtRihvyD8HraDeYyb7Z-46bICAvnJfo8XH4-0GCH4rMPep6UL8mPc5dGJL31dQEFbdd2i_3mJL_xvwiSkfG3ND5M9frmPiG3JBbMSQp7fwqmJ6ZnxuaYInDY1-1XQsGUIl6JFfcm4566cw-qS7FrDpvF0a376plWOMCBxogkZe9-ROt_iYqpi-TZveagdvUgjZL2vjaU34mvk0VOOzU2Pe8arljLnMG340posaRQXQq4VfH6Z3biArwFm0e60Q1r9bV0zCm8x3eTwduAW2ylKuuZlsvVKv6XfdpGSjTJ4FqRJwJ0ZjKw4tOvmdB0NsD-1ecAJMSZDB7UVl7Hl7NsErtpufHLkdKL7US0cdMZ8qc72jk6qwrq-VfTZY-oC-YFPh5LziT1nHhDjb-sJ7XAiX_MbubeQIIJJIxKiHxf4wxkbkQ3wFNeVmBuWArir7BPLmCrUHHwXn5_MAQQx9iWXjOZVIQE8BWM-3U1BLGcvV10qoa2iOWW1wxyuthB0DzUoQFeCep0i3WD-m6FhL2XD4PRb4SvGN4wuBJEbkntI9GdzB48PFJk0fSLeE6rI0OodIPppfRpM6dvWT2wgMtKqHWu0Gcxj6BxQjYIjnYw60EvYk921LWmjycztFAOfdxS35cgz0Rnp6_AXXibIAKUIzuqCACsgXec9Wj7T6v8qdaYtnlaxA3EqL-Jh11vEQcSaV13HlxabtBIfIBxRhtTuBlHJfYl5gjDB-Upc7C1a5Chp2-_lgPvZAcio62nwVLJhFgORFKbZPiTnJMr7m0G1vqMK6AQEw4Zc9gtI_R3MPoPHJqXF7oTCpvY_VDVZxFhbHTvkPBRtesrRpmoJfAo5qeCqlFPVvZlTWro6P8Bp-6vGCSCF2k1RewB_SPqng-gPGUsJOKo2S86DQ73Ubz-BbNfduMsRDpdGfJiOXf_OMXlS4PLIene4wv4rcSsIzUWMwJQBwLxgMd1R6U9-FqxI5vVOc3mFJh6bkeHzrFfwnLZabvoRCSks-LKwyRsB6GdQQ9YLQlkKrKXQPb3fqnFJ4dae6v28LefZ5SFn_5p6hIBCSWf9c-nIm-WrftVnCVte8F9RT_aPPpbHVGmWDWBKW7y0vtO12kf7e5VQ=w1920-h951' />
<img alt='Bookings Search' src='https://lh3.googleusercontent.com/fife/APg5EOZniXKu_ZsBC3ItEQCOw2ceSh19C34uNavSDYS0SDt7zDxccHh4-8x77iErK4_WUZoD8b1mmf32udSv4egYClFflpDWfvqxbBWCbd0mCvgn7mZrmho1c9Jnxy0l-Kv9fcpxprBlxdN4iJ-8cifQBlQXdE0f9qRHslzjRPCOlA8jwGMv6IUpe1qfO0tEoWsF2XI55VOfhU2Un8A6PRf7mzgucDkCv2eAyhfsUolqGqtvFbdt5sAs0ljuxXb7MOOQmt7sSqkerpQ6JfBImboybV5GVkTtnnGEvnE4OvBgV5WMo_HeTKrekp_dzOCZ-1EPz6Y25yJ1gGKDvRV9gG3T7RHvP0iyQtDJAWjSfSueK6bIipkcbSgUwij-kjbc-BWk3N4BAOGhVgrag7Y_1wi7U1OXS4ZoQ75Urwi3hO0QAlybBLGw-E-YyvDFMBSYSW1JgLB3YQdKsTzTy5URdnOlXy84YC0F_4ktnAXQOThhTqboXQMIKxPfgCUKtwirS2GshF466Bq71T7muhJq3R9T-KdtxmyVPBL1IY_tJpJqEs3hr64nvCvn1YIggzoITHUYI8-gGNfq2sbP1oKcfLIh6q6DGBHbzMdLwrFv9T2tdG7P70QXMmDwOeshacFZb0thjAL_b-Kcr9agKWXRgc1SCLv4KXuRH_USknWUE2XXngw0wJ_LqL_JZahvfLJ_ms2N01jsnYek47MBPNxFHwNt7HEI7BxhRLt-93mYr6ayJ6qAHVPwHWlXBY-fnmGMvd5JTvdDZu7vFjAUSIZnBU-haw7zRRk0evEqT5nId9YLI31cfV09vIXbZiXuuKNWPLwvLsE3wTVJFQUdEYz6QSIWcGMKbbQ-kg-goWhE1GK_8G7ozFJ-qyQPYifVrNI9J7y0DurBmpjRf6DeTx962fnPw1ukMraIL1143A6GppNvByo8vE19BP1npZX-tpEVSIKBVqcomyV-vkQNtsdvSj3OO6GAKaRM9PPwMdSzw1pFJnl-CzDZQVC9xlPDEErkfmUzoWpH8ixizqVv_wUf_N9MzruSBL397ojhLLXjc7rQ2uX3FndQrTcFxrXs4j0aQ0-MKqte-YI574tf-kiSaWiCxJPSN1LDGOJMIgsw6WKgTiAHnU0CxfHVcS1ClcEPfiTNpnOkRKBBGhpuyjiKRh1vf45zOaqUNMclRzFGqmQW2dQrlToAracUGueStUp0NWgG6JWMKj-DB2fUUXOgH5-Mj4ipzlEe99rNpZJdxlMWY2SrC7CuvRLWT5UmpsFPzeOwXvl1fbaK-1DohzockL9nK5MMC6ojWDxMxYUPvWU4zjK2No4yvYbJxbSZ7PYP8pUQx44Z5vM07xaMuvvfbiO41d3KOwCw0PqGRvGnKyxHEPRHEv-JGDq4uJLEesJLGnQAz88FJhKCJq251uddiU5hV5PRdCIsv6wbMy9uGw386T999YwS2wLp5M3PEhiUrb9rlh1VlD9QibCqG8oBWEysHgvg2F0IlSDq85mTk7KwfMpuWSDOn_X1mROc29enLm923Nun3aHAVOI7ZdTGK5qUxe3a62N8TWRUeQVS296zeEbzyGXgR9C_wxZCitrXsrAwP2GbEmN8VyPuct3fgg=w1340-h951'>
<img alt='Creating new Booking' src='https://lh3.googleusercontent.com/fife/APg5EOb-PpLyVE4WrOmxQcUD8cXjBxepwfhryEH7xJT7s8Eskv50R-LUYjqBpWlPVhofq2PFPA6tIPQlLMR0vaYpvlcVhr1G3FlFUH4z3OVZdq9N-s_NxIYuSrwt6p0kJ6StuyFe1etMQ8WVa2q9hFYUkKIEve6QnCc8TNInMJELhFXCnCkXMtSyvdIrCJ8O8cGV67_oVcSFzDc_19VBj1Rl9RDriaVKOfgu8Ny-mqJk9m6kddjvAXpWrPQAhHYcVDkARuAq1VeDoupdelwZMRrXdfylYZJfvN5HqVwRZL7aM2ZdjbXIjh4lU3f4x5UhRfVde3LdF3BUDOxXsKWPhUM5WIxPcv8pKcnjlBtOslL2EPmXaJ6565_iUesdbfLPIe1dzT97-EgV7TSshCBYjzW3Cye5m9kYR_vwHAUxbYwWFbxBA2--ruN_WDlBk3yxYFly7g1uXSdbZENulpuRllxKcFbP_hrxqYpTou4Wzj_OBoZHklE17Z65uf9MJBnhZOGfAEncgc-84T1h2VhxRJKDqMN_k4Zh5RAf4VgxbF38kVmxj--ZaPCfg4xvu6Omie2ai-WJAwYp1gSMSGhXVqqZv0m1gqulG1s9y0TKE0ry_UpFkJO3OR1aKWIGu6qkuZFRGjkh9VM9ZFa2BMEi92XYosgEeoGInzJunA07c1wEnFpuWf9jDiMulsimaKZVnTgCWTqm2Si476QL45qB5AwwoVIFArxeYFYULr8UE_Lp8ViQYH5sQyua6JZDU3JAs7qJYfOyzyrSg_rLt-I-8_XbYTS_U9JpO5qXZgP6S6gh8VPXAGLp3sc9x4Kwidle-1ra2fY9t1U5gI9OARBakdykHxeAtfBBmUMUjjjjVSmKwNrNfO5gNsuM33tCM1E7DMpO4p8Pe8C9ntpiFoIw8eZXwLDitQeSbonDY80nyuTHubBopUXzCZ4tTgJ-fUjp46jiU4LlPSzJ1jw2vM_l7sr95-Y4hfhrxwjY6Ud3x_MuJbpbjrYS7JXN_M8z0Xbf4wozNP7sZ_yMdXtx3VcgBZiGMtRVD276u5JQWtnwO_6hKWozcwys9VbIVblSGmC65CW1zdLfw5LfRlPbjD0AODgXwIlnKqTeNEUWES8T97u53PLJ_DtPVIFcjtn_7exO5nOmu_uZDBFxD63uemaDicIC8gHrCFdwbG-kyHbULEdkuafGdkmhmWrBHQqFqC_SQkWFt5lXEH34cGZPJXsUMCdS0vieaTGcgoeDTgtC_wlkNkzrrwjr6PWkno4jBfz2zvDaVL52sgTJba2wuSM1WeNPqLgTS1xyDFhY3jlhotxhfLZHBzAQcTgPRjGofe7DbWednrayicSW1DfD46cfEWg6ecKltmrWUpVkpQ8aeGxLwCsVV32tONBv7xZSzYZmINWE3WlXbi3QtHiloHOF1xyaeSmBzEJhiZ20vMevsoe1neUkA_sZu_jlaczEg9vW8flwvkMIw_m9OIWBAh9SwZYCZQ4YycupXwcMzYNTlLBvmFViswWS5-ldODY0mg0Fmhq6jxXcM1IR2my0GjB6YclkiI9v6bi-mNqWjAtS8OoHWY6QxZb60qdnGpP6qcjuWhtE8uCLCxIBtFYNkqzhkA=w1340-h951'>
<img alt='Creating new Booking Selecting Booker' src='https://lh3.googleusercontent.com/fife/APg5EOY-J2I6pdEP3Ql9hcbYXQk2TAKeB7oZ5IF7dWVNr13fkJHqKI9g78zIcOcBrG7GG0NmWF_ymcxZYvfPk-8xOp1bNAJTfnv32RmHvHxUXs7ukjDDckNHX_9x2tx-2g_E6e4oLiM_cHUJLG72Pf2XMX2I8w1_irKo6-4CvY4aznSTJA6F3K7JKD5UMe0q71sQ0AilJh6flCThVaC-TMyWkvGGYjdg0lysso2bG-tYI5En_0gxgKmJZUm2n-8ie6-GHa4VmYFLdDNYtQfwzxiU-OVPJKmnJe2RwaoAO5V7WFzftG7lYS_zXtjI164p5tkzQkMbWaZvQvNIo953m7yth0k5yUaTq5A7Y8KJhNh7hST2KscSjxIupirjQUiH7VYJ5H36fHMx5PdPYrIO_xGJm_gtbPVRe7WRHmjiGFM07FFUAd5aQetCkWTAk9u4W4RoNqxRon72rwVagoPDcrVZMz5tSEXRNnVsUlCJDL4tOo__bogp8O2urEsY_8hK3oR0XhjFzIQICZzeq00S4WNQXqOhsvykxZdfRcAfBRGDD_ueesuREmGQ-dIzPE_tjrIM8b89ayrNoOlE_d_D-FDLMU-u0NtRulMoNKvlMTd05iuhgQOPISiVPFimyqoDCimMJL0TnxxM86PYz4m_9yh6dIbeEXzPRKqEPDzQuomLCmol2FLDIOmhvNK-Z5fCrxQy9tjSLlYuBg9JV4AHscBy2ZBpY3rq0iQRNDRvKdcE0_wpylDH_TCHAnt4SkBIOZd22GK0PAr0zK_Vezz02MnCtq0aUjeRlZrptMxFS4CEih9bfF1canbo0qFh-aSxMcaa8Finmpzm_ZHaQXMQUqU_nVtaG7iZ5moCb49-gverqs6v0_1K7Zy8P04b0LhfH4fuxysvIjSrUZfMrsO-QTt0nmfdSbIJHeUplIFz9Z3hr9Y11GFdRWH6-H8lgSvA1_hyGY4WV5UKx1WdKILcQSxFPlOp5VPTJa6zecVm4Q4UnvgPNAZo8syCdxJJTnve7r4i8g8S7kF3BGcJo4TSxOU287Vfpf_shDPonOvzUQBNhV5hmxI9cEDyyft6gB3VZMnL-7EeheJVOISKMNM42Lhfzt6_5aooj4cl00Hyf8QgjXkhSTVrtLhYmk2AGVXXPCEEpByTJOQkZZa1iaTkkbxIGv0OYfF89h_1C520__0QEuaLdtf_ieZ_1KAYjB0OkfErqMzivZ0xeKYtIMZjFnyBhwU9PIAHktvGbo9xrz-Wcezl_QvO49Jga6rxM4YRy_6U798lgYa2P0_NXCJbWlrNgJIlvEJW3qgnqTp_4YJwvtRKnVoRGeJWRhtz644AV0HK_GXoIWEsLMpIe_TUMWrcTdkQnorVWz7b-nl9ViXd2pLr636SiRtMcwR9wY9s6tDiaqJGkCAiMGArXGo-dbH_39yc-sEEYmcwUsM29BO8No_ddQur-OICjuIrO811fKKGxC2kErtP35df5niwo0LyhVok22txXJOwrdBb9PyEXBcn-gLZqKKpQ3QIqlOL3zyrq53tSdXLWAbHMmJpFigckGnmEtsW42UA0lN_unLWruz6baG1NcJI_WNlifzrzroj3dmT1pNcL2pCycC_rw=w1340-h951'>
<img alt='Creating new Booking Selecting Book' src='https://lh3.googleusercontent.com/fife/APg5EOY_F2HUQGhUsoeX96zOTC5M4IrCSFzzZRHnmK7XM5VkRYpg52UK_VCXbbbFbQa6P4DirS3BMCZyaKeEH3SGeUwbm82ynF7UcAeOEPSsBohWrF8ayBEfix99fFid8GnQ785xNWHPnJwpBosEVi-SLOTfdrGx8NuxD59XFK2wP9ogXFlVrFxdfgAxvPoGB5bLDDexBIiMo9vy3QAWJh_MYg17PrdKWpv88hjGo0_xnnyJ-guR8wqjoNTSv-3FWiF5YFC6LozxFg8ijeqUqbdyLV7pyJ_uyDdWbI3o4jTWZjugF2q89n88_AL9UArUSXjskopN0B-2KCCMD5uRJhnNTYBDYxFoVKxNp2Ll-wqZQ_v9w6p2Ixg68LkRG679Evwaz3qTSAEiylScow1XHoSCkj4faQy4FyCFH6Vtj-7g9RddIPet11zsRxEuhel-bi_80dalDNH8kPwL5Oc0aO1gFx5P-a7iX8pmH-JU_aVB8PA5AnQl6X5KVVzkEftkQIMOq2XY4oJHX1q4qjvZAJyuWmG2UjY9SBD_1bWNf1JlQb5jBHwYZHeX3DLrZKXSm8_Vj3934ZhKj9ukJi75J_GKHX0R2OidoULgQ_3ipeK2SdZsHY3RHaz0nTkQzkdZxNABnUtVUonJBUbzGUT4YVBosC-kZTBBUkJj40Nr5FPucJ6_SEYFk9XsXw1PFA2SUmaNIqLg46V__i1PxIEb6wPWa4_FYUEGUTEcmZrkdqhR7pv9IhJlfeGjmYxnVV5G7Ea-y_83k5BSpBkk_TXLDYnPiNXJf40tQXIcjLJdmYYkykadIEm90BBppaixF-R6uRab7pjp9iECj4x6RhGmdwh-ohcy1GKXdF1MwYH4NJ7SJcKab9wAOV1j_gFHuf4zJiz0a635KWLBy2aDXu1LXRvmxUL0F3qVs6WPDgHPlVQPX36d-pTx_H-u2p44k3lzIKBbfYdFPzUXNZ9eha2DItsbt7xKXmwV0yPH872d9BZbZKcSdserS_6W768yLmWZtiGdlgl7pN_A2BECh6mtMjyH1xRtNEMK04kOVWM8L5VZb724aFs2q4f1_1C-krZEG2f6Fn9fVFVtahn8eCgs16nrdvIXWOJSV9zHTkfu6yVBwi6bRY_h0aru3As4s9rlHSOt86Xys4l7Eu07g7MYLwdilylWyraJSnBvuQ_z6D6AaQlDzojt9I3krX74rj_sseVngmVLbPVZD82-1NPH0mQ0eYfymvKo9mMnWCopXtX-hTvKaIU6RZHfGm_ogJSF64M6Rl3HmAxM7we0DONFm7RSRW7eDSoyM1JT2KmbgIK_0cylp0AGvrwIKkz9jZYvKtjyj0T7kiqmS6DesemSUj5uV3oZWHwLSgj_UP-0nh4qXT2UgJ2K2P6nsbCz6R8tOv-mHrKOi0jF8UBtddtIIlIVsTYopas05aqQdGuwi1HpHS7ykrs6tR4G9iI__p9xWdrimy_dpYMXN0y0bRXuvosFn5D0WR45kQ_qphPIGX1C3VhzNE6ypaMlqFMOG8K6uWfv4fXtwwLUKQS3c_8lqXsgRz2vPKXjFL2GmXnWooo55tJoN1qUTEHtfNtlu5tuQCgK1CCxxHX_HyqvYmy8-A=w1340-h951'>
</div>

---

### USERS PAGE

This page is designed to check all users for active bookings and roles. It is available only for `LIBRARIAN` and `ADMIN` users.
Also, `ADMIN` can register new users with any role. Each user can have multiple roles at the same time.

<div>
<img alt='Users Page' src='https://lh3.googleusercontent.com/fife/APg5EOazcRIBJ_eXZfFH96_Dvngei5XX3TC48BgXxZ7REUul-w5YyyViovCbWs9zhNxchoV7PUPcE2-Li9Wd-Bxx8PnjhnvEhViIrXfL9TAGNIuKAALXcxkVFF2cTzC3PDLdZPDzBAEz9B8eYUh1l6ds11t2gemrZcz0MAtA3W7AA2nzGLiVoVAINTsVE_nw3AMStlToIrpjnra_OuXmVzRmW8sNcjTKVI7S88LozxRwY0z3wV-NJiqAQn3oG-S6P2UVzHiV_oHr7iLntZEak_LlRtqW_vXRGZfK97X8Ukv4iLW_fQuRp_PMD_-_k9tOZE1OFdRXE9J-B_IXNN5Gy7a6YLAFN9WAPXQoDwtSl5xTRsL_MShv0aa36wuZGnSr-VSOYk0zSVdpQl-3t2Q9-K-6oiPsuLiAAZXXLWETuNFFrAd6t9u9twBjirilYGHSb30l-6NrNJFDkq9Mq5Yauuy1Sr15KNAMWDxvPl9Lo_bejSDyYyjt-5fvVgQoFNtfzRkx6FxFexM6g1dyLPpVTZmZdYKotM5c03A3HTtEqmLo2Ms9VZvBe7L-SVZNU_S0LrCJD6Q6ocNBBeaC--WOyvHgW56sGsCdayph4fQoClhEcIgKahu-0FICm42y_Tiri3tnOaR1C43Gn38jWCERLNZU8_uCrGwV6M1tQrFpEtCDMc3KtlfPJeOnq1oUcrsAkJBHKfNSJGznVNxRIYOzxWTid-l0VfE6uGOZS19WzV_5c75ifAVV1i-E99hfD2_k0lgWnD9Gzjh6MqhA8z31NJBT5rWvEQ4-wDH8RHIbNUqhUA-ZgkhHlNQH2ZTJo8ayl58f509gynxxpUkOT3wI6Bh1aa8QRx-2QMkiL7eZMWKw07UPgOiIJE8efc5hr_gm_6gmxi6rRQV7xOf8WhiKuJyfc5Qu-E1ZGL9oDgwjMshzVHjpmxoG2MpEzDGRKFPDodBoiWaslIRzg7JKH7PRdumOGFOgt9wMNk-52xEnYqpWixG9rEkxs5iCqeBgqzyaB0OGSWHXSeZhprsLGwePCJP9uEDX_A2MKG9Zj9Ltq-o4IXW6zb-B1jgzLVXqojqaogcUBsxEWZTj1qGW8ycVDAh8EVul9Tmvc1cWMd8RRbCZ0ewK76dJqTDNUlUu3jHsIM7Qpfij-8Zq5c1fAa13soxoi8qI1faiOuSyvV6J9GeMr8SWsgwR9c7x2nv4hiOgUQtnucfYvlPDt3e83-DHmacmGK7vR7SEJ8EL6PoFP1tuhsdcOKxqd7TJTsWc0cpmP40Ci57lyOvRWW9IO-xgjdbjhB88Xo3TM4gNIRpdTqYfsGMz0azyiQoSvUzv5yOUeGDKQ6KEe1SOrqNqfgzBTEZatXrmujQSP9n1qxJOcyPOfp5VmSkPgMKtBeMPxphWA730FKOz0C9Rszvdo8jQZNm5tN5SfKnQm0rOdCSrrhEBXwLuRtmLwIttR3sdzOyduV9PVOIPt0ua1g7rBC8I6wc7YGwsB0I39nvnRkBgvw8luVAo3CQQWku3cqsMHXcq03MGW9v3ig9UbCmWHMcXMfjzltmd8uJO374Vs5xHoJGqB5EYqSFkRuR1ebcq-OQxLQdehUMa4s2YuAzpuBta_g=w1340-h951'>
<img alt='Register new user' src='https://lh3.googleusercontent.com/fife/APg5EOZoXVRUn84Zxq33OH7BS441EtVA5R-6kpi0NOJ0oQn45GGCtkVu5l42mLzcma32Q8F74oUuUir_Mbq6sXmt7Sr0-h_uSoWd5YDiE74ZXkHT1P3oWWAdo4IKZE1HgX5CbA_7mBORM-OQzOuKOeYk1qrcNgTwcJIXpd6BTvV98GSUqySG0_imTNOzFcGQj3UmSR-ing5NwnPoWM9D3N06uO-jG31ve2Jc6NpN6581XgBpbJJAkBe9TjOaHCkrcDQSsks6jGA_PkZbW83FC0Pc9iQj1SllH0uMnbcAP_tjO3qg13i1M-ILJbdV4ZqOYZRRdwUgWIktArFZHEE3wQHUy5V17A5slKIZq8hX3z_qaEArvNDt5-XnHpdczCRwwxAU3NEjZSxZr8T137sJkBkF3s_4nNVHGxpIS2RRPb6zZNbFQOuRml-ghTcFh6krKOSdSgbjTYNet9_d4VbJ-NqB859Lo8N2LIYzmlbNXQ5xI5xQbBqkM6F_Jhgd2QfihZGg4_VVvWwW-oMLzXuxy3HaCcxfzLv2FeOJbwU55mjdLAMeogvXhC5OCeZSLV6CSdVx4C3GxpnMcUM7rvowZNtmW1_h8LHeLpHU7yHE3OKiKKytKm40dT2Y8NEu2sXLXjXgvASJ4PqsUH-VdnDZIAkmugjeWyhZaAEF5OKaSFEmrSE_ygEiX1FIpyVkDugFVrbyUn6BpDQWoB7KaLQMkL-jutHK5QwKjcHGqY4y_xv52maqNbKxtB9_KpAtzTOKnycZVAbzyJKC_iWaCHjbSLdasSyEz8WeeV_qlmYrqiEVFJgAjYaqtuEFCU51QZiHlbQZdmyzLx0XpAKYx5X9kpRVjTWxhaciPRs_szqhW3H-0w5t2wboWg7g-SXs2KUkdoBxL_jRTyCHVqUxrKi5Adeo38DNsjQt5IpimmpbwlBklMZFzAlOSsG3TzSYz0qE0Q3e9Vvi3eNy9kTb_--gW5xyOZ2I4FDD5b6LGB4jL9377BXo5DNW-wKq2c5QmNAJv8Tof5wLKIKU7c5kI7ThS19xGYqjJbzcK-KAkQhmGFhoanO0SUGIbMspuLg5JA-RdMA11iza6Iv2Y6nebICJxwwKCeNiJK13QDSPhmi1rkPlknNanSYW7GA_KZAJN4YqyHaFDwH17mdVr4LEBaEh4lcfUtcEOTYeMnJ0BFcJVcS6mu3o1C_hlo0ghHZoMy57wMVvJcxfWvpFAWKIE_WS_wX6Llxpw2tqdI1LenJooy69KrZ8_2DpomSpAbBIR04LodsYgdSozZmJD7l0bagOPaEV26Y47OwaRcXUmfD0Z-DilIzIKfvz4-vNGlEcwJx_RL1_SA80MrGpzI75x7w7FO_crTlkBMIaqwg4XtDbZqRuUz2kbJ-g2mUJGgjTn6qCwT_KsS87Rcjk9-Og-lv4OozESLe7qutRGA0gb12wVQ3jqbrkWoW8QBYCw_X4CNnM6eZ8zqyBZ_4zQLtihI1bp0GmOzBghQRmjeLoYH0m9TP5olP31JEvdTWcEzvtHgL5pPaGjGOltlJ5rDXEjCb1L512DgUzFdrj95sU3z6kJ6dPiRYXJf5sDT7VjmbpN8kdejhZdNVvY-FStH7cKCiZRA=w1340-h951'>
</div>

---

## BACKEND API ROUTES

<div>
<b>AUTH</b>
<ul>
    <li>
        GET - /api/auth/checkToken - Check if token is valid
    </li>
    <li>
        GET /api/auth/getUserInfo - Get information about user from token (requires to be authorized)
    </li>
    <li>
        POST /api/auth/registration - Create new user with role USER
    </li>
    <li>
        POST /api/auth/registrationWithRole - Create new user with ANY role (requires to be ADMIN)
    </li>
    <li>
        POST /api/auth/login - Login by username and password (generates and sends token back to client)
    </li>
</ul>

</div>
<div>
<b>STAFF</b>
<ul>
    <li>
        GET - /api/staff/users - Get all users (requires to be LIBRARIAN or ADMIN) in format <code>{
    "_id": ObjectID,
    "username": String,
    "roles": String[]
    "bookings": Bookings[]
  }</code>
    </li>
</ul>

</div>
<div>
<b>BOOKS</b>
<ul>
    <li>
        GET - /api/books - Get all books(requires token) in format <code>{
    "_id": ObjectID,
    "title": String,
    "year": String,
    "authors": String[],
    "description": String,
    "cover": String,
    "isAvailable": Boolean
  }</code>
    </li>
    <li>
        GET /api/books/available - Get information about only available books
    </li>
    <li>
        POST /api/books - Creates new Book (requires to be LIBRARIAN or ADMIN)
    </li>
</ul>
</div>
<div>
<b>BOOKINGS</b>
<ul>
    <li>
        GET - /api/bookings - Get deep information about all bookings (includes full info about the booker and the book). Requires to be LIBRARIAN or ADMIN.
    </li>
    <li>
        GET /api/bookings/:userId - Get deep information about specific user's bookings. Requires to be LIBRARIAN or ADMIN.
    </li>
    <li>
        POST /api/bookings - Create new booking. Requires <code>{ booker: ObjectID, book: ObjectID }</code> Requires to be LIBRARIAN or ADMIN.
    </li>
    <li>
        POST /api/bookings/cancel - Cancels booking, turns book status to available: true. Requires <code>{ _id: ObjectID }</code> Requires to be LIBRARIAN or ADMIN.
    </li>
</ul>
</div>
<div>
<b>ADMIN</b>
<ul>
    <li>
        GET - /api/admin/users - Get deep information about all users (includes hashed passwords from DB). Requires to be ADMIN.
    </li>
    <li>
        DELETE /api/admin/users/:id - Delete user by their id Requires to be ADMIN.
    </li>
</ul>
<br>
</div>

---

## FUTURE THOUGHTS

-   Implement search for users page
-   Implement adding new book (implemented on backend)
-   Implement deleting existing users (implemented on backend)

## TOOLS USED

-   <b><i>Frontend tools:&nbsp;</i></b>
    ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
    ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
    ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
    ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)<br>
    ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
    ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
    ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
    ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
    ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)<br />

-   <b><i>Backend tools:&nbsp;</i></b>
    ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
    ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
    ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)<br>
    ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
    ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
    ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
    ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)<br />

-   <b><i>Deploy & other tools:&nbsp;</i></b>
    ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
    ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
    ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### DETAILS OF IMPLEMENTATION

-   Used tailwind and Material UI for accelerating UI development ⚡
-   JWT for authorization and authentication (love it ❤️)
-   I wrote middlewares to protect certain routes (very convenient 🤓)
-   Wrote custom typed hooks for my redux store (structured and informative 🙌)
-   Used typescript for frontend (eliminates 90% of typical errors during development 👍)

### CONTACTS

![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white) - <i>https://www.linkedin.com/in/vitalii-t/</i><br>
![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white) - <i>https://t.me/metalyxxx</i><br>
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white) - <i>[metalyx3@gmail.com](mailto:metalyx3@gmail.com)</i> or <i>[vitalii.tereshchenko1@gmail.com](mailto:vitalii.tereshchenko1@gmail.com)</i>
<br>
