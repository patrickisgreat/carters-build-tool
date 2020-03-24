// Add images UI
var alias, height, alt, src, href, alias1, height1, alt1, src1, href1, alias2, height2, alt2, src2, href2, alias3, height3, alt3, src3, href3, alias4, height4, alt4, src4, href4, rowOneHTML, rowTwoHTML, rowThreeHTML, rowFourHTML, rowFiveHTML, i, displayI, newRowID, ctaCode;
i = 0;
displayI = i + 1;
newRowID = 'new-image-' + i;
ctaCode;

const rows = [];
const realHeight = [];
const images = [];
const contentID = [];



// Event listener for Add Content click button
document.getElementById('add-content').addEventListener('click', function() {
    if (rows.length >= 0) {
         document.getElementById('remove-content').innerHTML = '<button style="margin-left:10px;" class="btn btn-outline-danger" onclick="removeContent()">Remove Content</button>';
    }
    addContent();
});

// Carters Table Generator, Compile Code button event listener
document.getElementById('btn-compile').addEventListener('click', () => {
    compileCode();
});

const compileCode = () => {
    // add button to copy code to clipboard
    copyButton();
    // Remove the content manipulation buttons once you click compile code
    removeButtons();
    // Initialize the tableRow array, which will be what is printed into the text area as the compiled code output
    var tableRow = [];
    // Log to the console the array containing the order of columns, columnOrder is used to determine which column (1, 2, 3, or 4) we are trying to build
    console.log(contentID);

    // Loop through input rows to create fully compiled code
    for (i = 1; i <= rows.length; i++) {
        // arrayOrder is set to i - 1 since i is at 1 now and arrays start at 0, this is used to tell the if statement which array value (and corresponding column selection) we're trying to build
        var arrayI = i - 1;
        switch (contentID[arrayI]) {
            case 'singleImage':
                // get values for the inputs
                src = document.getElementById('image-src-' + i).value;
                href = document.getElementById('image-href-' + i).value;
                alias = document.getElementById('image-alias-' + i).value;
                height = document.getElementById('image-height-' + i).value;
                alt = document.getElementById('image-alt-' + i).value;
                // generate code
                tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="636">\n    <tr>\n' + '        <td align="left" valign="top">\n' + '            <div style="height: ' + height + 'px;"><a href="' + href + '" target="_blank" alias="' + alias + '" title="' + alt + '"><img src="' + src + '" border="0" alt="' + alt + '" title="' + alt + '" width="636" height="' + height + '" style="display: block; border: 0;"></a></div>\n' + '        </td>\n' + '    </tr>\n</table>\n';
            break;
            case 'spacer':
                // get values for the input
                spacer = document.getElementById('spacer-' + i).value;
                // generate code
                tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="100%">\n    <tr>\n' + '        td bgcolor="#ffffff" height="' + spacer + '" style="line-height:' + spacer + 'px; font-size:' + spacer + 'px;">&nbsp;</td>\n' + '    </tr>\n</table>\n';
            break;
            case 'shopNow':
                var shopNowInput = document.getElementById('shopnow-input').value;
                var shopNowArray = shopNowInput.split(",");
                tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="636">' + '\n    <tr>' + '\n        <td align="left" valign="top">' + '\n            <div style="height: 57px;"><a href="' + shopNowArray[0] + '" target="_blank" alias="' + shopNowArray[1] + '" title="Shop Now"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTAtest_ShopNow.gif" border="0" alt="Shop Now" title="Shop Now" height="57" width="636" style="display: block;"></a></div>' + '\n        </td>' + '\n    </tr>' + '\n</table><!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n';
            break;
            case 'set7':
                var set7Input = document.getElementById('set7-input').value;
                var set7Array = set7Input.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n <tr>\n      <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set7Array[0] + '" target="_blank" alias="' + set7Array[1] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BG.gif" border="0" alt="Baby Girl" title="Baby Girl" height="58" width="233" style="display: block;"></a></div>\n                   </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set7Array[2] + '" target="_blank" alias="' + set7Array[3] + '" title="Toddler Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TG.gif" border="0" alt="Toddler Girl" title="Toddler Girl" height="58" width="170" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set7Array[4] + '" target="_blank" alias="' + set7Array[5] + '" title="Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KG.gif" border="0" alt="Girl" title="Girl" height="58" width="233" style="display: block;"></a></div>\n                  </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n <tr>\n      <td bgcolor="#ffffff" height="15" style="line-height:15px; font-size:15px;">&nbsp;</td>\n   </tr>\n   <tr>\n        <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set7Array[6] + '" target="_blank" alias="' + set7Array[7] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BB.gif" border="0" alt="Baby Boy" title="Baby Boy" height="58" width="233" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set7Array[8] + '" target="_blank" alias="' + set7Array[9] + '" title="Toddler Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TB.gif" border="0" alt="Toddler Boy" title="Toddler Boy" height="58" width="170" style="display: block;"></a></div>\n                 </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set7Array[10] + '" target="_blank" alias="' + set7Array[11] + '" title="Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KB.gif" border="0" alt="Boy" title="Boy" height="58" width="233" style="display: block;"></a></div>\n                   </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n <tr>\n      <td>\n          <div style="height: 72px;"><a href="' + set7Array[12] + '" target="_blank" alias="' + set7Array[13] + '" title="Find A Store"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_FAS.gif" border="0" alt="Find A Store" title="Find A Store" height="72" width="636" style="display: block;"></a></div>\n       </td>\n </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n';
            break;
            case 'set6':
                var set6Input = document.getElementById('set6-input').value;
                var set6Array = set6Input.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n <tr>\n      <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set6Array[0] + '" target="_blank" alias="' + set6Array[1] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BG.gif" border="0" alt="Baby Girl" title="Baby Girl" height="58" width="233" style="display: block;"></a></div>\n                   </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set6Array[2] + '" target="_blank" alias="' + set6Array[3] + '" title="Toddler Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TG.gif" border="0" alt="Toddler Girl" title="Toddler Girl" height="58" width="170" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set6Array[4] + '" target="_blank" alias="' + set6Array[5] + '" title="Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KG.gif" border="0" alt="Girl" title="Girl" height="58" width="233" style="display: block;"></a></div>\n                  </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n <tr>\n      <td bgcolor="#ffffff" height="15" style="line-height:15px; font-size:15px;">&nbsp;</td>\n   </tr>\n   <tr>\n        <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set6Array[6] + '" target="_blank" alias="' + set6Array[7] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BB.gif" border="0" alt="Baby Boy" title="Baby Boy" height="58" width="233" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set6Array[8] + '" target="_blank" alias="' + set6Array[9] + '" title="Toddler Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TB.gif" border="0" alt="Toddler Boy" title="Toddler Boy" height="58" width="170" style="display: block;"></a></div>\n                 </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + set6Array[10] + '" target="_blank" alias="' + set6Array[11] + '" title="Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KB.gif" border="0" alt="Boy" title="Boy" height="58" width="233" style="display: block;"></a></div>\n                   </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n';
            break;
            case 'girl3cta':
                var girl3Input = document.getElementById('girl3-input').value;
                var girl3Array = girl3Input.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + girl3Array[0] + '" target="_blank" alias="' + girl3Array[1] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BG.gif" border="0" alt="Baby Girl" title="Baby Girl" height="58" width="233" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + girl3Array[2] + '" target="_blank" alias="' + girl3Array[3] + '" title="Toddler Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TG.gif" border="0" alt="Toddler Girl" title="Toddler Girl" height="58" width="170" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + girl3Array[4] + '" target="_blank" alias="' + girl3Array[5] + '" title="Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KG.gif" border="0" alt="Girl" title="Girl" height="58" width="233" style="display: block;"></a></div>\n       </td>\n   </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n';
            break;
            case 'boy3cta':
                var boy3Input = document.getElementById('boy3-input').value;
                var boy3Array = boy3Input.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + boy3Array[0] + '" target="_blank" alias="' + boy3Array[1] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BB.gif" border="0" alt="Baby Boy" title="Baby Boy" height="58" width="233" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + boy3Array[2] + '" target="_blank" alias="' + boy3Array[3] + '" title="Toddler Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TB.gif" border="0" alt="Toddler Boy" title="Toddler Boy" height="58" width="170" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + boy3Array[4] + '" target="_blank" alias="' + boy3Array[5] + '" title="Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KB.gif" border="0" alt="Boy" title="Boy" height="58" width="233" style="display: block;"></a></div>\n       </td>\n  </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n';
            break;
            case 'shop2':
                var shop2Input = document.getElementById('shop2-input').value;
                var shop2Array = shop2Input.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 59px;"><a href="' + shop2Array[0] + '" target="_blank" alias="' + shop2Array[1] + '" title="Shop Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/112319_CAR_PM_03.jpg" border="0" alt="Shop Girl" title="Shop Girl" height="59" width="318" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 59px;"><a href="' + shop2Array[2] + '" target="_blank" alias="' + shop2Array[3] + '" title="Shop Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/112319_CAR_PM_04.jpg" border="0" alt="Shop Boy" title="Shop Boy" height="59" width="318" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n';
            break;
            case 'baby2':
                var baby2Input = document.getElementById('baby2-input').value;
                var baby2Array = baby2Input.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 57px;"><a href="' + baby2Array[0] + '" target="_blank" alias="' + baby2Array[1] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/102419_CAR_THU_BABY_02.gif" border="0" alt="Baby Girl" title="Baby Girl" height="57" width="318" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 57px;"><a href="' + baby2Array[2] + '" target="_blank" alias="' + baby2Array[3] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/102419_CAR_THU_BABY_03.gif" border="0" alt="Baby Boy" title="Baby Boy" height="57" width="318" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n';
            break;
        };
    };
    // join array & output code
    tableRow = tableRow.join('');
    document.getElementById('code-output').textContent = tableRow;
};

// Copy Clipboard function
function copyClipboard() {
    var copyText = document.getElementById("code-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById('success-message').innerHTML = 'Code successfully copied!';
};

// Add Row function
function addContent() {
    i++;
    console.log(i);
    newRowID = 'new-image-' + i;
    var rowTemplate;
    //consider a switch statement here
    var contentSelect = document.getElementById('content-select').value;
    switch (contentSelect) {
    case 'singleImage':
        rowTemplate = '<div id="' + newRowID + '"><div class="row">' +
                        '<div class="col-lg-3 text-left">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image ' + i + ' Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" id="image-src-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-3 text-left">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image ' + i + ' Href</label>' +
                                '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-3 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + i + '">Image ' + i + ' Alias</label>' +
                                    '<input type="text" placeholder="Image Alias" class="form-control" id="image-alias-' + i + '">' +
                                '</div>' +
                            '</div>' +
                                '<div class="col-lg-3 text-left"><div class="form-group">' +
                                    '<label for="image' + i + '">Image ' + i + ' Height</label>' +
                                    '<input type="text" placeholder="Image Height" class="form-control" id="image-height-' + i + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row" id="add-image-row-' + i + '">' +
                            '<div class="col-lg-3 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + i + '">Image ' + i + ' Alt</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + i + '">' +
                                '</div>' +
                            '</div>' +
                        '</div></div></div>';
                        contentID.push('singleImage');
                        break;
    case 'spacer':
        rowTemplate = '<div id="' + newRowID + '"><div class="row">' +
        '<div class="col-lg-3 text-left">' +
            '<div class="form-group">' +
                '<label for="image' + i + '">Spacer</label>' +
                '<input type="text" placeholder="Enter an integer" class="form-control" id="spacer-' + i + '">' +
            '</div>' +
        '</div></div></div>';
        contentID.push('spacer');
        break;
    case 'shopNow':
        rowTemplate = '<div id="' + newRowID + '"><div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/shopnowcta_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-9 text-left"><textarea class="col-lg-12" id="shopnow-input" rows="6"></textarea></div></div></div>';
        contentID.push('shopNow');
        break;
    case 'set7':
        rowTemplate = '<div id="' + newRowID + '"><div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/fullsetcta_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-9 text-left"><textarea class="col-lg-12" id="set7-input" rows="6"></textarea></div></div></div>';
        contentID.push('set7');
        break;
    case 'set6':
        rowTemplate = '<div id="' + newRowID + '"><div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/fullsetnofascta_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-9 text-left"><textarea class="col-lg-12" id="set6-input" rows="6"></textarea></div></div></div>';
        contentID.push('set6');
        break;
    case 'girl3cta':
        rowTemplate = '<div id="' + newRowID + '"><div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/girlctas_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-9 text-left"><textarea class="col-lg-12" id="girl3-input" rows="6"></textarea></div></div></div>';
        contentID.push('girl3cta');
        break;
    case 'boy3cta':
        rowTemplate = '<div id="' + newRowID + '"><div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/boyctas_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-9 text-left"><textarea class="col-lg-12" id="boy3-input" rows="6"></textarea></div></div></div>';
        contentID.push('boy3cta');
        break;
    case 'shop2':
        rowTemplate = '<div id="' + newRowID + '"><div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/shopgbctas_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-9 text-left"><textarea class="col-lg-12" id="shop2-input" rows="6"></textarea></div></div></div>';
        contentID.push('shop2');
        break;
    case 'baby2':
        rowTemplate = '<div id="' + newRowID + '"><div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/babygirlbabyboycta_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-9 text-left"><textarea class="col-lg-12" id="baby2-input" rows="6"></textarea></div></div></div>';
        contentID.push('baby2');
        break;
    }
    rows.push(i);
    $('#more-images').append(rowTemplate);
};

function removeContent() {
    // Runs when the Remove Row button is clicked
    // Log i and the rows array so we can visually keep track of it in the console, and pop the last item off the end of the rows array since we're removing it visually
    console.log(i);
    rows.pop();
    console.log(rows);
    // Determine which div to remove, remove it with jQuery, and decrement i
    newRowID = '#new-image-' + i;
    $(newRowID).remove();
    --i;
    // If all rows have been removed, we don't need to display the remove row button so we're removing it here
    if (i === 0) {
        document.getElementById('remove-content').innerHTML = '';
    }
};

function removeButtons() {
    $('#content-buttons').remove();
};

function init() {
    window.location.reload(true);
};

function copyButton() {
    document.getElementById('copy-button').innerHTML = '<button class="btn btn-success" id="btn-copy" onclick="copyClipboard()">Copy to Clipboard</button><button style="margin-left:20px;" class="btn btn-outline-dark" id="btn-init" onclick="init()">Reset</button>';
};