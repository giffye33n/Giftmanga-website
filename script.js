const container = document.getElementById("mangaContainer");
const totalPages = 3;  // เปลี่ยนเป็นจำนวนหน้าของตอนจริง
const chapterFolder = "manga/chapter1/";

for (let i = 1; i <= totalPages; i++) {
  const img = document.createElement("img");
  const fileNumber = String(i).padStart(2, '0'); // 01, 02, ...
  img.src = `${chapterFolder}${fileNumber}.jpg`;
  img.alt = `หน้า ${i}`;
  container.appendChild(img);
}
