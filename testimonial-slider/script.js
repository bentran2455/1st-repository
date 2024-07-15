const testimonials = [
    {
        username: "Ben Tran",
        photoURL: "https://lh3.googleusercontent.com/pw/AP1GczMdZCyDSOooolAxHJCEEqoDbnlg9jerwowa5FAQ7mzTngcskyKdaFyMHPQwSrShmK2mfksWTA7UmvVBKDk4TPcuGWSJYZOd3yrng4ApF396p2q0z7WFrEpWd42sMjR3aNTcZs4wNDSs4hyaANcE_yo8PY6gi00-Lp-1Fn80IvTTp5kvjbeBhq_gLCESElEOnvJpLQW_aAlI9dJan-0b9MYWyZ_15rBANH6pjzAX3l0pNeFmbLbtmrCf9zA6_VZ_PmApjxHiFdoJSrlqqfEHYkoKl75DzPNddabbMCTSa-7Mc0xMbR9smNGfELAi6Tg3L_FvkBBqTMvm_3ZB6MNfWVbkBUT3m9J1gTIapUCxU5m4DMmojk16lBcETLhOrrJme9bIB14CBFIokzedJ0zqS9o4D4yhH_R-d0acteXsLIZInw2txUs3rLHcbe1IewcHT1wl-HQaYmnKu9DHivWpY9FWeDPCSP40Jj9ovN4oep-donxowI4ryZCnVJhToZm6VxhYJss1sPXiivC3YnZr2bTUHaBbwUm8wwwwTb4ZPNAigrShNGC3NVzjP0J4E7XB63YAB3IA8EvLG-Jzyx63GkVYwJvoCQpzI1FTChTwYTitT6rAMCvVNx2nx3EXvV7fAHw_qf462_7J7uzseRJ1M9L_xwarWaCr_bhRxUXoB7tSvBy_hv2bLcfod6QngOrpQY6qHuvSQRZUk7vIwrtAGLHNf5gNMV-EDjL94zP52kE5Qhmqehev_2_YbWv55nyrBA_QJLXbsC-yfod9egeV_sRS6ne5iJfSmjLU-wrSEcnSnQFCH_qQJ-MmddIfnc98mFPTBQtb2BNQAPgW7fYniE-TVFDx95doRKFYl2URS-sjTwBYlfjSW-s_31HOHEr3vE2OZhhWHHWoPei3bhk87U0XFTiOL8JpF_T6XfRjAABz0xIgPTk6WsY2gkePleQ=w978-h1304-s-no?authuser=1",
        text: "This is Ben from Judge.me",
    },
    {
        username: "Shin Yuna",
        photoURL: "https://lh3.googleusercontent.com/pw/AP1GczMvBRg3NtIfMY1lae-5Zh0MSJ_5SFizj84EI49oFOzasP8BJN5YkRVG9ekpuFv0bmTFpxdGE16aX1C3eA8N0zXXn-hPSj8_nSvzFOFnby5iW_O4Qyvxs3JLC4n_uzcNk0NUYmXyDTnb9ZAYBO1LQGb5f9s5QC65OsWCVuKtOmPTUhkvRc0-s7DdvYOIOLJVjNEDtujpjRLcdo6O9fayge8ULbdHnfyxQ39uKudVCHdjcNZsa20b9w_qOjzLFjw3keBzSk4cxn8Wp6wmgSgQtXBSjuCPov4hwOCFUi_YrFgpB6rR9seSuUAR72HtNZho7tyQDV3YCFCEuVLkpKPjsH_dJGfKpNodGeu04omjFy_jx-GBor5EraKbU_gbznV3N738QN4AFEfhIU5yBITL1ZUhRfa2I5t7qhuLFyybvxu2iqV-6-QGYchhR3eGKyRyJIw0SujAA9tinhSscgTkkA77kXPjFZflTDWWziwt_X0oXgJ2IA-E-KR50YkH3ZOc2dbpR9_eNjkuk2riP-ZVT7DNTX0DWQ7cbqaSQbcbgp1e0Ka51yXtZyog2Hu6R5wgTB3PxWABMkuK6eOZPHt0BkvkxGqLjW6ltyR15GnPb-Hacqbb4-ms57ow_Q_1wekq8svjumNCCPA8fNi4A3RoILUBjYtHqYMvR2ulmoTAUgcWyTb7M0ecoUScJCbuDtaPb3izkMLrMG4MGbp-TjbafL6fuj28CfEhpZ8lqATe-UG1r46zCh1VIJRWaf9egNnb_if5-eU1oJ4pFTPUdNv0hXC6E3aLlRR9JF3O7ghN07LsG1t4bHWpKUI6do0qwbfj028LY5Hltdvru4nuVcSZ7jyVh3ASIl7L_IDTYesWybMQClOk34n8zKXhP7VHTx3SDblSYV_UXucB6aebVoo-LvKj_t_wHxu_IKXZ9-YkxPy_fMyWSLFQqhxYb2duCfo=w1956-h1304-s-no?authuser=1",
        text: "Bambambam ba di",
    },
    {
        username: "Han Pham",
        photoURL: "https://lh3.googleusercontent.com/pw/AP1GczNsu_UgBEIb6d7SdnBIuM-mr1CqD_BCCEkjxrLj5llNbMBuZtFYnlveE_xxrMxWL08HxQkTm3Qx54_eamuEaLk_sbDY3Zfpb8XL6Mj2ooMqIkpzLFY6mqPxIzIRb7njrs4ny9-_mlew2Rcs6uOUUFXuCKXL-BDLHEg6javlKCVOG-FAVg9kFTZZOR3Bc45Y7V5LujPMYLjZxHVE4TIiNSnrqRpfx7iODq2PFqXm_FCiAmLBskcgnozVdaG0UjAbgR0vs03AUcwRx11bAO44-DsXGi71NpstXNWke5qVWaafw1YlNYFZXDu69FgKEaDFqGDcAZFQzNc0LedmaE5L9tzLqLO91_-AQiwCX6Tva0PsaISPs0D-wugZ9Q2_N-Bxx56myoxrU-f2h-cKqeIQ020cRzHocxM_kqlZ-kB94DkSHTabmylq9o7nB4DuToe-bi7_fXswYLmRCXuPwmCNeFKEaweG3cQhFf7aqc0s35kLTav2RtzpNoP-ewhfz8d39u5fJsURh2xwmYO-Lxclp2govbtUbRJhNio_56zWTRsIBI9XRZx2iOHNRckdxS0xUPQ-r_oIQLQAKndV8ut2xc5jlfxejvrJTpklW6p8eDNCl_Ag65W2lFMd_6H1HH3r0DTG-fcdOYmkCuwf6rJFDce9n-brRjng6L2cArx_oto0orBabsnT_ax5QuCQO-DLuRfet8_JBPUFcVQAY3l9EY9DVn6DE7XOeENXO8u6HoG4nbHY3QAM99vG3HA2HvQfxX7idEC_26F_4StRaElReRbQTFCbZpBn5GVpyuxAgfUc5DLzZ4ZDs0mta1lBHf2f7lKJfhG2xBnOkcxedficeJP4adgFhTP8W6BXizl2YJAe7U9cL22ASV3Xq7FlF-KTj1BI76pKLzC_p80MEtOHi2puZE2XT9ZTHPybrlDEBA5dLq9OhBWAabI4Pd81yBY=w1304-h1304-s-no?authuser=1",
        text: "Have a gray day",
    },
];

const nameEl = document.querySelector('.username');
const textEl = document.querySelector('.text');
const imgEL = document.querySelector('img');

let idx=0;

function updateTestimonial() {
    const {username, photoURL, text} = testimonials[idx];
    textEl.innerText = text;
    nameEl.innerText = username;
    imgEL.src = photoURL;
    idx++;
    if (idx === testimonials.length) {
        idx=0;
    }
}

updateTestimonial();
setInterval(updateTestimonial,2000);