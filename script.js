// 🔁 Click logic (Ad → Real)
let clicked = false;
const adLink = "https://viralvideoclips18.blogspot.com/";
const realLink = "https://1024terabox.com/s/1hCVge-OY0eysBcI_lYkO_A";

document.getElementById("clickNowBtn").addEventListener("click", function () {
  if (!clicked) {
    clicked = true;
    window.location.href = adLink;
  } else {
    window.location.href = realLink;
  }
});

// 📥 Download with progress
const downloadBtn = document.getElementById('downloadBtn');
const progressBar = document.getElementById('progressBar');
const btnText = document.getElementById('btnText');
const borderRect = document.querySelector('.circle-border-glow rect');

let downloading = false;

downloadBtn.addEventListener('click', () => {
  if (downloading) return;
  downloading = true;

  let progress = 0;
  const totalLength = 612;

  const interval = setInterval(() => {
    progress += 2;
    const offset = totalLength - (progress / 100) * totalLength;

    progressBar.style.width = progress + "%";
    borderRect.style.strokeDashoffset = offset;
    btnText.innerText = progress + " %";

    if (progress >= 100) {
      clearInterval(interval);
      btnText.innerText = "Download Ready!";

      setTimeout(() => {
        const a = document.createElement('a');
        a.href = "https://1024terabox.com/s/1V7b15gvlFGDXA9eCDH8CMg"; // 🎯 Replace with real file if needed
        a.download = "viral_clip.mp4";
        a.click();

        btnText.innerText = "Download Again";
        progressBar.style.width = "0%";
        borderRect.style.strokeDashoffset = totalLength;
        downloading = false;
      }, 1000);
    }
  }, 100);
});
