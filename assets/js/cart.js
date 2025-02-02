
// تعريف الأسعار لكل فئة
const priceAdults = 100; // سعر البالغين
const priceChildren6_11 = 50; // سعر الأطفال (6-11 سنة)
const priceChildren3_5 = 30; // سعر الأطفال (3-5 سنوات)
const priceInfants = 20; // الرضع (حتى 2 سنة)

// اختيار العناصر من الـ DOM
const adultsInput = document.getElementById("adults_val");
const children6_11Input = document.getElementById("Children_val");
const children3_5Input = document.getElementById("Childrenkid_val"); // هنا نستخدم id الصحيح
const infantsInput = document.getElementById("Infants_val");
const totalPriceElement = document.getElementById("subtotalPrice");
const caseTotal = document.getElementById("case-total");
const childrenTotal = document.getElementById("Children-total");
const childrenkidTotal = document.getElementById("Children_total");

const infantsTotal = document.getElementById("Infants-total");

// الدوال لزيادة أو تقليل الأعداد
document.getElementById("adults_inc").addEventListener("click", () => updateQuantity(adultsInput, 1, priceAdults, caseTotal));
document.getElementById("adults_dec").addEventListener("click", () => updateQuantity(adultsInput, -1, priceAdults, caseTotal));

document.getElementById("Children_inc").addEventListener("click", () => updateQuantity(children6_11Input, 1, priceChildren6_11, childrenTotal));
document.getElementById("Children_dec").addEventListener("click", () => updateQuantity(children6_11Input, -1, priceChildren6_11, childrenTotal));

document.getElementById("Childrenkid_inc").addEventListener("click", () => updateQuantity(children3_5Input, 1, priceChildren3_5,childrenkidTotal)); // تأكد من id الصحيح
document.getElementById("Childrenkid_dec").addEventListener("click", () => updateQuantity(children3_5Input, -1, priceChildren3_5, childrenkidTotal));

document.getElementById("Infants_inc").addEventListener("click", () => updateQuantity(infantsInput, 1, priceInfants, infantsTotal));
document.getElementById("Infants_dec").addEventListener("click", () => updateQuantity(infantsInput, -1, priceInfants, infantsTotal));

// تحديث الكمية وحساب السعر الإجمالي
function updateQuantity(input, delta, pricePerItem, totalElement) {
    let value = parseInt(input.value) + delta;
    value = Math.max(0, value); // التأكد من أن العدد لا يقل عن 0
    input.value = value;
    const total = value * pricePerItem;
    totalElement.textContent = total.toFixed(2); // عرض السعر مع تنسيق عشري
    updateSubtotal();
}

// حساب الإجمالي الكلي
function updateSubtotal() {
    const totalAdults = parseInt(adultsInput.value) * priceAdults;
    const totalChildren6_11 = parseInt(children6_11Input.value) * priceChildren6_11;
    const totalChildren3_5 = parseInt(children3_5Input.value) * priceChildren3_5; // هنا نستخدم id الصحيح
    const totalInfants = parseInt(infantsInput.value) * priceInfants;

    const subtotal = totalAdults + totalChildren6_11 + totalChildren3_5 + totalInfants;
    totalPriceElement.textContent = subtotal.toFixed(2);
}
