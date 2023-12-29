import React from "react";
import { Navbar } from "../../navbar/navbar"


const home = () => {
  return (
    <div>
        <Navbar />
          <div className="mask" style={{backgroundColor: "transparent"}}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3"> Beauty Consultant</h1>
                <p>Selamat datang di website kami, di sini kami akan membantu anda menyelesaikan segala permasalahan kecantikan Anda.
                  Kami adalah klinik terpercaya yang siap membantu Anda mengatasi segala kekhawatiran anda mengenai kulit dan kecantikan
                  dengan memberikan solusi yang tepat.</p>

                <h2>Kontak saya</h2>
                <p>Email: rosawidya74@gmail.com</p>
                <p>Phone:081233502805</p>
                
                </div></div></div></div>
  );
};

export default home;
