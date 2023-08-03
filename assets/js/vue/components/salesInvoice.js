const salesInvoice = Vue.component("sales-invoice", {
  template: `
        <div>
            <div class="row">
                <div class="col-xs-12">
                    <a href="" v-on:click.prevent="print"><i class="fa fa-print"></i> Print</a>
                    <label for="english" style="margin-left: 10px;">
                        <input type="radio" id="english" value="english" v-model="language"> English
                    </label>
                    <label for="bangla" style="margin-left: 5px;">
                        <input type="radio" id="bangla" value="bangla" v-model="language"> Bangla
                    </label>
    
                </div>
            </div>
            
            <div id="invoiceContent">
                <div class="row">
                    <div class="col-xs-12 text-center">
                        <div _h098asdh>
                            {{ language == 'english' ? 'Sales Invoice' :  language == 'bangla' ? 'ক্যাশ মেমো' : 'فاتورة المبيعات' }}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-7">
                        <strong>{{ language == 'english' ? 'Customer Id' : language == 'bangla' ? 'গ্রাহক আইডি' : 'هوية الزبون' }}:</strong>  {{ sales.Customer_Code   }}<br>
                        <strong>{{ language == 'english' ? 'Customer Name' : language == 'bangla' ? 'গ্রাহকের নাম' : 'اسم الزبون' }}:</strong> {{ sales.Customer_Name }}<br>
                        <strong>{{ language == 'english' ? 'Customer Address' : language == 'bangla' ? 'গ্রাহকের ঠিকানা' : 'عنوان العميل'}}: </strong> {{ sales.Customer_Address }}<br>
                        <strong>{{ language == 'english' ? 'Customer Mobile' : language == 'bangla' ? 'মোবাইল নাম্বার' : 'جوال العميل'}}:</strong> {{ sales.Customer_Mobile }}
                    </div>
                    <div class="col-xs-5 text-right">
                        <strong>{{ language == 'english' ? 'Sales by' : language == 'bangla' ? 'বিক্রয়কারী' : 'المبيعات عن طريق'}}:</strong> {{ sales.AddBy }}<br>
                        <strong>{{ language == 'english' ? 'Invoice No.' : language == 'bangla' ? 'মেমো নাম্বার' : "رقم الفاتورة"}}:</strong> {{ sales.SaleMaster_InvoiceNo }}<br> 
                        <strong>{{ language == 'english' ? 'Sales Date' : language == 'bangla' ? 'তারিখ' : 'تاريخ المبيعات'}}: </strong> {{ sales.SaleMaster_SaleDate }} {{ sales.AddTime | formatDateTime('h:mm a') }} <br> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div _d9283dsc></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <table _a584de>
                            <thead>
                                <tr>
                                    <td>{{ language == 'english' ? 'Sl.' : language == 'bangla' ? 'ক্রমিক নং' : 'الرقم التسلسلي'}}</td>
                                    <td>{{ language == 'english' ? 'Description' : language == 'bangla' ? 'পন্যের বিবরণ' : 'وصف'}}</td>
                                    <td>{{ language == 'english' ? 'Qnty' : language == 'bangla' ? 'পরিমান' : 'كمية'}}</td>
                                    <td>{{ language == 'english' ? 'Unit Price' : language == 'bangla' ? 'দর' : 'سعر الوحدة'}}</td>
                                    <td>{{ language == 'english' ? 'Total' : language == 'bangla' ? 'মোট মূল্য' : 'المجموع'}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, sl) in cart">
                                    <td>{{ sl + 1 }}</td>
                                    <td>{{ language == 'english' ? product.Product_Name : language == 'bangla' ? product.Product_Bn_Name : product.Product_Ar_Name }}</td>
                                    <td>{{ product.SaleDetails_TotalQuantity }}-{{ product.Unit_Name }}</td>
                                    <td>{{ product.SaleDetails_Rate }}</td>
                                    <td align="right">{{ product.SaleDetails_TotalAmount }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6">
                        <br>
                        <table class="pull-left">
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Previous Due' : language == 'bangla' ? 'পূর্বের বকেয়া' : 'تاريخ الاستحقاق السابق'}}:</strong></td>
                                
                                <td style="text-align:right">{{ sales.SaleMaster_Previous_Due == null ? '0.00' : sales.SaleMaster_Previous_Due  }}</td>
                            </tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Current Due' : language == 'bangla' ? 'বর্তমান বকেয়া' : 'موعد الاستحقاق الحالي'}}:</strong></td>
                                
                                <td style="text-align:right">{{ sales.SaleMaster_DueAmount == null ? '0.00' : sales.SaleMaster_DueAmount  }}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="border-bottom: 1px solid #ccc;"></td>
                            </tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Total Due' : language == 'bangla' ? 'মোট বকেয়া' : 'الاجمالي المستحق'}}:</strong></td>
                                
                                <td style="text-align:right">{{ (parseFloat(sales.SaleMaster_Previous_Due) + parseFloat(sales.SaleMaster_DueAmount == null ? 0.00 : sales.SaleMaster_DueAmount)).toFixed(2) }}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-xs-6">
                        <table _t92sadbc2>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Sub Total' : language == 'bangla' ? 'মোট' : 'المجموع الفرعي'}}:</strong></td>
                                <td style="text-align:right">{{ sales.SaleMaster_SubTotalAmount }}</td>
                            </tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'VAT' : language == 'bangla' ? 'ভ্যাট' : 'برميل'}}:</strong></td>
                                <td style="text-align:right">{{ sales.SaleMaster_TaxAmount }}</td>
                            </tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Discount' : language == 'bangla' ? 'ডিসকাউন্ট' : 'تخفيض'}}:</strong></td>
                                <td style="text-align:right">{{ sales.SaleMaster_TotalDiscountAmount }}</td>
                            </tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Transport Cost' : language == 'bangla' ? 'পরিবহন খরচ' : 'تكلفة النقل'}}:</strong></td>
                                <td style="text-align:right">{{ sales.SaleMaster_Freight }}</td>
                            </tr>
                            <tr><td colspan="2" style="border-bottom: 1px solid #ccc"></td></tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Total' : language == 'bangla' ? 'সর্বমোট' : 'المجموع'}}:</strong></td>
                                <td style="text-align:right">{{ sales.SaleMaster_TotalSaleAmount }}</td>
                            </tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Cash Paid' : language == 'bangla' ? 'নগদ প্রদান' : 'النقدية المدفوعة'}}:</strong></td>
                                <td style="text-align:right">{{ sales.SaleMaster_cashPaid }}</td>
                            </tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Bank Paid' : language == 'bangla' ? 'ব্যাংক প্রদান' : 'البنك المدفوع'}}:</strong></td>
                                <td style="text-align:right">{{ sales.SaleMaster_bankPaid }}</td>
                            </tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Total Paid' : language == 'bangla' ? 'জমা' : 'مدفوع'}}:</strong></td>
                                <td style="text-align:right">{{ sales.SaleMaster_PaidAmount }}</td>
                            </tr>
                            <tr><td colspan="2" style="border-bottom: 1px solid #ccc"></td></tr>
                            <tr>
                                <td><strong>{{ language == 'english' ? 'Due' : language == 'bangla' ? 'বকেয়া' : 'بسبب'}}:</strong></td>
                                <td style="text-align:right">{{ sales.SaleMaster_DueAmount }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <strong>{{ language == 'english' ? 'In Word' : language == 'bangla' ? 'কথায়' : 'بكلمات'}}: </strong> {{ convertNumberToWords(sales.SaleMaster_TotalSaleAmount) }}<br><br>
                        <strong>{{ language == 'english' ? 'Note' : language == 'bangla' ? 'নোট' : 'ملحوظة'}}: </strong>
                        <p style="white-space: pre-line">{{ sales.SaleMaster_Description }}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
  props: ["sales_id"],
  data() {
    return {
      sales: {
        SaleMaster_InvoiceNo: null,
        SalseCustomer_IDNo: null,
        SaleMaster_SaleDate: null,
        Customer_Name: null,
        Customer_Address: null,
        Customer_Mobile: null,
        SaleMaster_TotalSaleAmount: null,
        SaleMaster_TotalDiscountAmount: null,
        SaleMaster_TaxAmount: null,
        SaleMaster_Freight: null,
        SaleMaster_SubTotalAmount: null,
        SaleMaster_PaidAmount: null,
        SaleMaster_DueAmount: null,
        SaleMaster_Previous_Due: null,
        SaleMaster_Description: null,
        AddBy: null,
      },
      cart: [],
      language: "english",
      style: null,
      companyProfile: null,
      currentBranch: null,
    };
  },
  filters: {
    formatDateTime(dt, format) {
      return dt == "" || dt == null ? "" : moment(dt).format(format);
    },
  },
  created() {
    this.setStyle();
    this.getSales();
    this.getCurrentBranch();
  },
  methods: {
    getSales() {
      axios.post("/get_sales", { salesId: this.sales_id }).then((res) => {
        this.sales = res.data.sales[0];
        this.cart = res.data.saleDetails;
      });
    },
    getCurrentBranch() {
      axios.get("/get_current_branch").then((res) => {
        this.currentBranch = res.data;
      });
    },
    setStyle() {
      this.style = document.createElement("style");
      this.style.innerHTML = `
                div[_h098asdh]{
                    /*background-color:#e0e0e0;*/
                    font-weight: bold;
                    font-size:15px;
                    margin-bottom:15px;
                    padding: 5px;
                    border-top: 1px dotted #454545;
                    border-bottom: 1px dotted #454545;
                }
                div[_d9283dsc]{
                    padding-bottom:25px;
                    border-bottom: 1px solid #ccc;
                    margin-bottom: 15px;
                }
                table[_a584de]{
                    width: 100%;
                    text-align:center;
                }
                table[_a584de] thead{
                    font-weight:bold;
                }
                table[_a584de] td{
                    padding: 3px;
                    border: 1px solid #ccc;
                }
                table[_t92sadbc2]{
                    width: 100%;
                }
                table[_t92sadbc2] td{
                    padding: 2px;
                }
            `;
      document.head.appendChild(this.style);
    },
    convertNumberToWords(amountToWord) {
      var words = new Array();
      words[0] = "";
      words[1] =
        this.language == "english"
          ? "One"
          : this.language == "bangla"
          ? "এক"
          : "واحد";
      words[2] =
        this.language == "english"
          ? "Two"
          : this.language == "bangla"
          ? "দুই"
          : "إثنان";
      words[3] =
        this.language == "english"
          ? "Three"
          : this.language == "bangla"
          ? "তিন"
          : "ثلاثة";
      words[4] =
        this.language == "english"
          ? "Four"
          : this.language == "bangla"
          ? "চার"
          : "أربع";
      words[5] =
        this.language == "english"
          ? "Five"
          : this.language == "bangla"
          ? "পাঁচ"
          : "خمسة";
      words[6] =
        this.language == "english"
          ? "Six"
          : this.language == "bangla"
          ? "ছয়"
          : "ستة";
      words[7] =
        this.language == "english"
          ? "Seven"
          : this.language == "bangla"
          ? "সাত"
          : "سبعة";
      words[8] =
        this.language == "english"
          ? "Eight"
          : this.language == "bangla"
          ? "আট"
          : "ثمانية";
      words[9] =
        this.language == "english"
          ? "Nine"
          : this.language == "bangla"
          ? "নয়"
          : "تسعة";
      words[10] =
        this.language == "english"
          ? "Ten"
          : this.language == "bangla"
          ? "দশ"
          : "عشرة";
      words[11] =
        this.language == "english"
          ? "Eleven"
          : this.language == "bangla"
          ? "এগারো"
          : "أحد عشر";
      words[12] =
        this.language == "english"
          ? "Twelve"
          : this.language == "bangla"
          ? "বারো"
          : "اثني عشر";
      words[13] =
        this.language == "english"
          ? "Thirteen"
          : this.language == "bangla"
          ? "তেরো"
          : "ثلاثة عشر";
      words[14] =
        this.language == "english"
          ? "Fourteen"
          : this.language == "bangla"
          ? "চৌদ্দ"
          : "أربعة عشرة";
      words[15] =
        this.language == "english"
          ? "Fifteen"
          : this.language == "bangla"
          ? "পনেরো"
          : "خمسة عشر";
      words[16] =
        this.language == "english"
          ? "Sixteen"
          : this.language == "bangla"
          ? "ষোলো"
          : "السادس عشر";
      words[17] =
        this.language == "english"
          ? "Seventeen"
          : this.language == "bangla"
          ? "সতেরো"
          : "سبعة عشر";
      words[18] =
        this.language == "english"
          ? "Eighteen"
          : this.language == "bangla"
          ? "আঠারো"
          : "الثامنة عشر";
      words[19] =
        this.language == "english"
          ? "Nineteen"
          : this.language == "bangla"
          ? "উনিশ"
          : "تسعة عشر";
      words[20] =
        this.language == "english"
          ? "Twenty"
          : this.language == "bangla"
          ? "বিশ"
          : "عشرين";
      words[30] =
        this.language == "english"
          ? "Thirty"
          : this.language == "bangla"
          ? "ত্রিশ"
          : "ثلاثون";
      words[40] =
        this.language == "english"
          ? "Forty"
          : this.language == "bangla"
          ? "চল্লিশ"
          : "أربعين";
      words[50] =
        this.language == "english"
          ? "Fifty"
          : this.language == "bangla"
          ? "পঞ্চাশ"
          : "خمسون";
      words[60] =
        this.language == "english"
          ? "Sixty"
          : this.language == "bangla"
          ? "ষাইট"
          : "ستون";
      words[70] =
        this.language == "english"
          ? "Seventy"
          : this.language == "bangla"
          ? "সত্তর"
          : "سبعون";
      words[80] =
        this.language == "english"
          ? "Eighty"
          : this.language == "bangla"
          ? "আশি"
          : "ثمانون";
      words[90] =
        this.language == "english"
          ? "Ninety"
          : this.language == "bangla"
          ? "নব্বই"
          : "تسعين";
      amount = amountToWord == null ? "0.00" : amountToWord.toString();
      var atemp = amount.split(".");
      var number = atemp[0].split(",").join("");
      var n_length = number.length;
      var words_string = "";
      if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
          received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
          n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
          if (i == 0 || i == 2 || i == 4 || i == 7) {
            if (n_array[i] == 1) {
              n_array[j] = 10 + parseInt(n_array[j]);
              n_array[i] = 0;
            }
          }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
          if (i == 0 || i == 2 || i == 4 || i == 7) {
            value = n_array[i] * 10;
          } else {
            value = n_array[i];
          }
          if (value != 0) {
            words_string += words[value] + " ";
          }
          if (
            (i == 1 && value != 0) ||
            (i == 0 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string +=
              this.language == "english"
                ? "Crores "
                : this.language == "bangla"
                ? " কোটি "
                : " كرور ";
          }
          if (
            (i == 3 && value != 0) ||
            (i == 2 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string +=
              this.language == "english"
                ? "Lakhs "
                : this.language == "bangla"
                ? " লক্ষ "
                : " كهس ";
          }
          if (
            (i == 5 && value != 0) ||
            (i == 4 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string +=
              this.language == "english"
                ? "Thousand "
                : this.language == "bangla"
                ? " হাজার "
                : " ألف ";
          }
          if (
            i == 6 &&
            value != 0 &&
            n_array[i + 1] != 0 &&
            n_array[i + 2] != 0
          ) {
            words_string +=
              this.language == "english"
                ? "Hundred and "
                : this.language == "bangla"
                ? " শত এবং "
                : " مائة و ";
          } else if (i == 6 && value != 0) {
            words_string +=
              this.language == "english"
                ? "Hundred "
                : this.language == "bangla"
                ? " শত "
                : " مائة ";
          }
        }
        words_string = words_string.split("  ").join(" ");
      }
      return (
        words_string +
        (this.language == "english"
          ? " only"
          : this.language == "bangla"
          ? " টাকা মাত্র"
          : " فقط")
      );
    },
    async print() {
      let invoiceContent = document.querySelector("#invoiceContent").innerHTML;
      let printWindow = window.open(
        "",
        "PRINT",
        `width=${screen.width}, height=${screen.height}, left=0, top=0`
      );
      if (this.currentBranch.print_type == "3") {
        printWindow.document.write(`
                    <html>
                        <head>
                            <title>Invoice</title>
                            <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
                            <style>
                                body, table{
                                    font-size:11px;
                                }
                            </style>
                        </head>
                        <body>
                            <div style="text-align:center;">
                                <img src="/uploads/company_profile_thum/${this.currentBranch.Company_Logo_org}" alt="Logo" style="height:80px;margin:0px;" /><br>
                                <strong style="font-size:18px;">${this.currentBranch.Company_Name}</strong><br>
                                <p style="white-space:pre-line;">${this.currentBranch.Repot_Heading}</p>
                            </div>
                            ${invoiceContent}
                        </body>
                    </html>
                `);
      } else if (this.currentBranch.print_type == "2") {
        printWindow.document.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>Invoice</title>
                        <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
                        <style>
                            html, body{
                                width:500px!important;
                            }
                            body, table{
                                font-size: 13px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="row">
                            <div class="col-xs-2"><img src="/uploads/company_profile_thum/${this.currentBranch.Company_Logo_org}" alt="Logo" style="height:80px;" /></div>
                            <div class="col-xs-10" style="padding-top:20px;">
                                <strong style="font-size:18px;">${this.currentBranch.Company_Name}</strong><br>
                                <p style="white-space:pre-line;">${this.currentBranch.Repot_Heading}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div style="border-bottom: 4px double #454545;margin-top:7px;margin-bottom:7px;"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                ${invoiceContent}
                            </div>
                        </div>
                    </body>
                    </html>
				`);
      } else {
        printWindow.document.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>Invoice</title>
                        <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
                        <style>
                            body, table{
                                font-size: 13px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <table style="width:100%;">
                                <thead>
                                    <tr>
                                        <td>
                                            <div class="row">
                                                <div class="col-xs-2"><img src="/uploads/company_profile_thum/${
                                                  this.currentBranch
                                                    .Company_Logo_org
                                                }" alt="Logo" style="height:80px;" /></div>
                                                <div class="col-xs-10" style="padding-top:20px;">
                                                    <strong style="font-size:18px;">${
                                                      this.currentBranch
                                                        .Company_Name
                                                    }</strong><br>
                                                    <p style="white-space:pre-line;">${
                                                      this.currentBranch
                                                        .Repot_Heading
                                                    }</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div style="border-bottom: 4px double #454545;margin-top:7px;margin-bottom:7px;"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    ${invoiceContent}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>
                                            <div style="width:100%;height:50px;">&nbsp;</div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div class="row" style="border-bottom:1px solid #ccc;margin-bottom:5px;padding-bottom:6px;">
                                <div class="col-xs-6">
                                    <span style="text-decoration:overline;">Received by</span><br><br>
                                    ** THANK YOU FOR YOUR BUSINESS **
                                </div>
                                <div class="col-xs-6 text-right">
                                    <span style="text-decoration:overline;">Authorized by</span>
                                </div>
                            </div>
                            <div style="position:fixed;left:0;bottom:15px;width:100%;">
                                <div class="row" style="font-size:12px;">
                                    <div class="col-xs-6">
                                        Print Date: ${moment().format(
                                          "DD-MM-YYYY h:mm a"
                                        )}, Printed by: ${this.sales.AddBy}
                                    </div>
                                    <div class="col-xs-6 text-right">
                                        Developed by: Link-Up Technologoy, Contact no: 01911978897
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </body>
                    </html>
				`);
      }
      let invoiceStyle = printWindow.document.createElement("style");
      invoiceStyle.innerHTML = this.style.innerHTML;
      printWindow.document.head.appendChild(invoiceStyle);
      printWindow.moveTo(0, 0);

      printWindow.focus();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      printWindow.print();
      printWindow.close();
    },
  },
});
