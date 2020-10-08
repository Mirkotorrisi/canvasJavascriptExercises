let lan = 15.11;
let lon = 30.11

const str = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}&travelmode=driving`

const link = document.getElementById('link')

link.href = str