import type { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'ar',
  schema:           (issue) => `نوع غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
  specific: {
    base64:         (issue) => `معرّف Base64 غير صالح: القيمة المُدخلة ${issue.received}`,
    bic:            (issue) => `BIC غير صالح: القيمة المُدخلة ${issue.received}`,
    bytes:          (issue) => `حجم بايت غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    check:          (issue) => `مُدخل غير صالح: القيمة المُدخلة ${issue.received}`,
    checkAsync:     (issue) => `مُدخل غير صالح: القيمة المُدخلة ${issue.received}`,
    checkItems:     (issue) => `عناصر غير صالحة: قيمة الإدخال ${issue.received}`,
    creditCard:     (issue) => `بطاقة إئتمان غير صالحة: القيمة المُدخلة ${issue.received}`,
    cuid2:          (issue) => `قيمة Cuid2 غير صالحة: القيمة المُدخلة ${issue.received}`,
    decimal:        (issue) => `رقم عُشَري غير صالح: القيمة المُدخلة ${issue.received}`,
    digits:         (issue) => `أرقام غير صالحة: القيمة المُدخلة ${issue.received}`,
    email:          (issue) => `بريد الكتروني غير صالح: القيمة المُدخلة ${issue.received}`,
    emoji:          (issue) => `رمز تعبيري غير صالح: القيمة المُدخلة ${issue.received}`,
    empty:          (issue) => `الطول غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    endsWith:       (issue) => `نهاية غير صالحة: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    everyItem:      (issue) => `عنصر غير صالح: القيمة المُدخلة ${issue.received}`,
    excludes:       (issue) => `محتوى غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    finite:         (issue) => `عدد محدود غير صالح: القيمة المُدخلة ${issue.received}`,
    hash:           (issue) => `رقم تجزئة غير صحيح: القيمة المُدخلة ${issue.received}`,
    hexColor:       (issue) => `رمز لون غير صالح: القيمة المُدخلة ${issue.received}`,
    hexadecimal:    (issue) => `رقم سداسي عشري غير صالح: القيمة المُدخلة ${issue.received}`,
    imei:           (issue) => `رقم IMEI غير صالح: القيمة المُدخلة ${issue.received}`,
    includes:       (issue) => `محتوى غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    integer:        (issue) => `رقم غير صالح: القيمة المُدخلة ${issue.received}`,
    ip:             (issue) => `عنوان IP غير صالح: القيمة المُدخلة ${issue.received}`,
    ipv4:           (issue) => `عنوان IPv4 غير صالح: القيمة المُدخلة ${issue.received}`,
    ipv6:           (issue) => `عنوان IPv6 غير صالح: القيمة المُدخلة ${issue.received}`,
    isoDate:        (issue) => `تاريخ غير صالح: القيمة المُدخلة ${issue.received}`,
    isoDateTime:    (issue) => `التاريخ والوقت غير صالحان: القيمة المُدخلة ${issue.received}`,
    isoTime:        (issue) => `صيغة وقت غير صالحة: القيمة المُدخلة ${issue.received}`,
    isoTimeSecond:  (issue) => `قيمة وقت بالثواني غير صالحة: القيمة المُدخلة ${issue.received}`,
    isoTimestamp:   (issue) => `الطابع الزمني غير صالح: القيمة المُدخلة ${issue.received}`,
    isoWeek:        (issue) => `أسبوع غير صالح: القيمة المُدخلة ${issue.received}`,
    length:         (issue) => `الطول غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    mac:            (issue) => `عنوان MAC غير صالح: القيمة المُدخلة ${issue.received}`,
    mac48:          (issue) => `عنوان 48-بت MAC غير صالح: القيمة المُدخلة ${issue.received}`,
    mac64:          (issue) => `عنوان 64-بت MAC غير صالح: القيمة المُدخلة ${issue.received}`,
    maxBytes:       (issue) => `حجم بايت غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    maxLength:      (issue) => `الطول غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    maxSize:        (issue) => `حجم غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    maxValue:       (issue) => `قيمة غير صالحة: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    mimeType:       (issue) => `نوع MIME غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    minBytes:       (issue) => `حجم بايت غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    minLength:      (issue) => `طول غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    minSize:        (issue) => `حجم غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    minValue:       (issue) => `قيمة غير صالحة: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    multipleOf:     (issue) => `متعدد غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    nanoid:         (issue) => `معرّف Nano ID غير صالح: القيمة المُدخلة ${issue.received}`,
    nonEmpty:       (issue) => `الطول غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    notBytes:       (issue) => `حجم بايت غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    notLength:      (issue) => `طول غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    notSize:        (issue) => `حجم غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    notValue:       (issue) => `قيمة غير صالحة: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    octal:          (issue) => `رقم ثماني غير صالح: القيمة المُدخلة ${issue.received}`,
    partialCheck:   (issue) => `مُدخل غير صالح: القيمة المُدخلة ${issue.received}`,
    regex:          (issue) => `صيغة غير صالحة: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    safeInteger:    (issue) => `رقم كامل آمن غير صالح: القيمة المُدخلة ${issue.received}`,
    size:           (issue) => `حجم غير صالح: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    someItem:       (issue) => `عنصر غير صالح: القيمة المُدخلة ${issue.received}`,
    startsWith:     (issue) => `بداية غير صالحة: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
    ulid:           (issue) => `معرّف ULID غير صالح: القيمة المُدخلة ${issue.received}`,
    url:            (issue) => `رابط غير صالح: القيمة المُدخلة ${issue.received}`,
    uuid:           (issue) => `معرّف UUID غير صالح: القيمة المُدخلة ${issue.received}`,
    value:          (issue) => `قيمة غير صالحة: القيمة المتوقّعة ${issue.expected} لكن القيمة المُدخلة ${issue.received}`,
  },
};

export default language;
