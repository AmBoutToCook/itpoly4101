import React from "react";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* ส่วนข้อความต้อนรับ */}
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>ยินดีต้อนรับสู่สาขา IT</h1>
        <p>ปรัชญาของเรา: "การพัฒนาความรู้และทักษะด้าน IT เพื่ออนาคตที่ดีกว่า"</p>
      </header>

      {/* ส่วนข้อมูลทั่วไปของสาขา */}
      <section style={{ marginBottom: "30px" }}>
        <h2>ข้อมูลทั่วไปของสาขา</h2>
        <p>
          สาขาวิชาเทคโนโลยีสารสนเทศ (Information Technology) มุ่งเน้นการสร้าง
          และพัฒนานักศึกษาให้มีความรู้และทักษะในด้านการพัฒนาซอฟต์แวร์
          การวิเคราะห์ข้อมูล และเทคโนโลยีสมัยใหม่ เพื่อรองรับความต้องการของตลาดงาน
        </p>
      </section>

      {/* ส่วนภาพประกอบกิจกรรม */}
      <section>
        <h2>กิจกรรมที่เกี่ยวข้อง</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <img
            src="https://via.placeholder.com/150"
            alt="กิจกรรม 1"
            style={{ width: "150px", height: "100px", objectFit: "cover" }}
          />
          <img
            src="https://via.placeholder.com/150"
            alt="กิจกรรม 2"
            style={{ width: "150px", height: "100px", objectFit: "cover" }}
          />
          <img
            src="https://via.placeholder.com/150"
            alt="กิจกรรม 3"
            style={{ width: "150px", height: "100px", objectFit: "cover" }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
