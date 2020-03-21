// Add images UI
var alias, height, alt, src, href, alias1, height1, alt1, src1, href1, alias2, height2, alt2, src2, href2, alias3, height3, alt3, src3, href3, alias4, height4, alt4, src4, href4, rowOneHTML, rowTwoHTML, rowThreeHTML, rowFourHTML, rowFiveHTML, i, displayI, newRowID, ctaCode;
i = 0;
displayI = i + 1;
newRowID = 'new-image-' + i;
ctaCode;

const rows = [];
addRow();



// Event listener for Add Row click button
document.getElementById('add-row').addEventListener('click', function() {
    if (rows.length > 0) {
         document.getElementById('remove-row').innerHTML = '<button style="margin-left:20px;" class="btn btn-outline-danger" onclick="removeRow()">Remove Row</button>';
    }
    addRow();
});

// Event listener for CTA dropdown options
document.getElementById('cta-select').addEventListener('click', () => {
    registerCTAs();
});

// Carters Table Generator, Compile Code button event listener
document.getElementById('btn-compile').addEventListener('click', () => {
    compileCode();
});

// readability -- separate out methods from registering event listeners
// consider const or let over var where possible to prevent side effects
// and or unwanted mutations, use es6 whenever possible

const registerCTAs = () => {
    //consider a switch statement here
    var ctaSelect = document.getElementById('cta-select').value;
    switch (ctaSelect) {
    case 'shopNow':
        document.getElementById('cta-space').innerHTML = '<div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/shopnowcta_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Shop Now Href</label> <input type="text" placeholder="Shop Now Href" class="form-control" id="shop-now-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Shop Now Alias</label> <input type="text" placeholder="Shop Now Alias" class="form-control" id="shop-now-alias"></div></div></div>';
        break;
    case 'set7':
        document.getElementById('cta-space').innerHTML = '<div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/fullsetcta_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Girl Href</label> <input type="text" placeholder="Baby Girl Href" class="form-control" id="baby-girl-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Toddler Girl Href</label> <input type="text" placeholder="Toddler Girl Href" class="form-control" id="toddler-girl-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Girl Href</label></label> <input type="text" placeholder="Girl Href" class="form-control" id="girl-href"></div></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Girl Alias</label> <input type="text" placeholder="Baby Girl Alias" class="form-control" id="baby-girl-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Toddler Girl Alias</label> <input type="text" placeholder="Toddler Girl Alias" class="form-control" id="toddler-girl-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Girl Alias</label> <input type="text" placeholder="Girl Alias" class="form-control" id="girl-alias"></div></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Boy Href</label> <input type="text" placeholder="Baby Boy Href" class="form-control" id="baby-boy-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Toddler Boy Href</label> <input type="text" placeholder="Toddler Boy Href" class="form-control" id="toddler-boy-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Boy Href</label></label> <input type="text" placeholder="Boy Href" class="form-control" id="boy-href"></div></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Boy Alias</label> <input type="text" placeholder="Baby Boy Alias" class="form-control" id="baby-boy-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Toddler Boy Alias</label> <input type="text" placeholder="Toddler Boy Alias" class="form-control" id="toddler-boy-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Boy Alias</label> <input type="text" placeholder="Boy Alias" class="form-control" id="boy-alias"></div></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="find a store">Shop Now Href</label> <input type="text" value="https://www.carters.com/find_a_store" class="form-control" id="find-a-store-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Find A Store Alias</label> <input type="text" placeholder="Find A Store Alias" class="form-control" id="find-a-store-alias"></div></div></div>';
        break;
    case 'set6':
        document.getElementById('cta-space').innerHTML = '<div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/fullsetnofascta_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-9 text-left"><textarea class="col-lg-12" id="set6-input" rows="6"></textarea></div></div>'
        break;
    case 'girl3cta':
        document.getElementById('cta-space').innerHTML = '<div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/girlctas_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Girl Href</label> <input type="text" placeholder="Baby Girl Href" class="form-control" id="baby-girl-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Toddler Girl Href</label> <input type="text" placeholder="Toddler Girl Href" class="form-control" id="toddler-girl-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Girl Href</label></label> <input type="text" placeholder="Girl Href" class="form-control" id="girl-href"></div></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Girl Alias</label> <input type="text" placeholder="Baby Girl Alias" class="form-control" id="baby-girl-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Toddler Girl Alias</label> <input type="text" placeholder="Toddler Girl Alias" class="form-control" id="toddler-girl-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Girl Alias</label> <input type="text" placeholder="Girl Alias" class="form-control" id="girl-alias"></div></div></div>';
        break;
    case 'boy3cta':
        document.getElementById('cta-space').innerHTML = '<div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/boyctas_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Boy Href</label> <input type="text" placeholder="Baby Boy Href" class="form-control" id="baby-boy-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Toddler Boy Href</label> <input type="text" placeholder="Toddler Boy Href" class="form-control" id="toddler-boy-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Boy Href</label></label> <input type="text" placeholder="Boy Href" class="form-control" id="boy-href"></div></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Boy Alias</label> <input type="text" placeholder="Baby Boy Alias" class="form-control" id="baby-boy-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Toddler Boy Alias</label> <input type="text" placeholder="Toddler Boy Alias" class="form-control" id="toddler-boy-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Boy Alias</label> <input type="text" placeholder="Boy Alias" class="form-control" id="boy-alias"></div></div></div>';
        break;
    case 'shop2':
        document.getElementById('cta-space').innerHTML = '<div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/shopgbctas_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Shop Girl Href</label> <input type="text" placeholder="Shop Girl Href" class="form-control" id="shop-girl-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Shop Girl Alias</label> <input type="text" placeholder="Shop Girl Alias" class="form-control" id="shop-girl-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Shop Boy Href</label> <input type="text" placeholder="Shop Boy Href" class="form-control" id="shop-boy-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Shop Boy Alias</label> <input type="text" placeholder="Shop Boy Alias" class="form-control" id="shop-boy-alias"></div></div></div>';
        break;
    case 'baby2':
        document.getElementById('cta-space').innerHTML = '<div class="row"><div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/49/babygirlbabyboycta_2020.png" width="636" /></div></div><div class="row"><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Girl Href</label> <input type="text" placeholder="Baby Girl Href" class="form-control" id="baby-girl-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Baby Girl Alias</label> <input type="text" placeholder="Baby Girl Alias" class="form-control" id="baby-girl-alias"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="href">Baby Boy Href</label> <input type="text" placeholder="Baby Boy Href" class="form-control" id="baby-boy-href"></div></div><div class="col-lg-3 text-left"><div class="form-group"><label for="alias">Baby Boy Alias</label> <input type="text" placeholder="Baby Boy Alias" class="form-control" id="baby-boy-alias"></div></div></div>';
        break;
    default:
        document.getElementById('cta-space').innerHTML = '';
    }

}

const compileCode = () => {
    // add button to copy code to clipboard
    copyButton();
    buildCTA();
    var openTable = '<table border="0" cellspacing="0" cellpadding="0" width="636">'
    var closeTable = '</table>'
    var tableRow = [];

    // replace with loop over rows array / iterable
    for (let [index, value] of rows.entries()) {
        index = index+1;
         // get values for the inputs
         src = document.getElementById('image-src-' + index).value;
         href = document.getElementById('image-href-' + index).value;
         alias = document.getElementById('image-alias-' + index).value;
         height = document.getElementById('image-height-' + index).value;
         alt = document.getElementById('image-alt-' + index).value;

         tableRow[index] = '<tr><td align="left" valign="top"><div style="height: ' + height + 'px;"><a href="' + href + '" target="_blank" alias="' + alias + '" title="' + alt + '"><img src="' + src + '" border="0" alt="' + alt + '" title="' + alt + '" width="636" height="' + height + '" style="display: block; border: 0;"></a></div></td></tr>'

    }
     // join array & output code
     tableRow = tableRow.join('');
     document.getElementById('code-output').textContent = openTable + tableRow + closeTable + ctaCode;
}
// Copy Clipboard function
function copyClipboard() {
    var copyText = document.getElementById("code-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById('success-message').innerHTML = 'Code successfully copied!';
}
;
// Add Row function
function addRow() {
    i++;
    console.log(i);
    displayI = i;
    newRowID = 'new-image-' + i;
    let rowTemplate = '<div class="row" id="' + newRowID + '">' +
                        '<div class="col-lg-3 text-left">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image ' + displayI + ' Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control" id="image-src-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-3 text-left">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image ' + displayI + ' Href</label>' +
                                '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-3 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + i + '">Image ' + displayI + ' Alias</label>' +
                                    '<input type="text" placeholder="Image Alias" class="form-control" id="image-alias-' + i + '">' +
                                '</div>' +
                            '</div>' +
                                '<div class="col-lg-3 text-left"><div class="form-group">' +
                                    '<label for="image' + i + '">Image ' + displayI + ' Height</label>' +
                                    '<input type="text" placeholder="Image Height" class="form-control" id="image-height-' + i + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row" id="add-image-row-' + i + '">' +
                            '<div class="col-lg-3 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + i + '">Image ' + displayI + ' Alt</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + i + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div id="more-images"></div>';


    rows.push(rowTemplate);
    document.getElementById('more-images').innerHTML = rows.join('');
    // document.getElementById('more-images').setAttribute('id', newRowID);
}
;
function removeRow() {
    --i;
    console.log(i);
    newRowID = 'new-image-' + i;
    rows.pop();
    console.log(rows);
    document.getElementById('more-images').innerHTML = rows.join('');
    // document.getElementById('more-images').setAttribute('id', newRowID);
    if (i < 2) {
        document.getElementById('remove-row').innerHTML = '';
    }
}
;
function init() {
    window.location.reload(true);
}
;
function copyButton() {
    document.getElementById('copy-button').innerHTML = '<button class="btn btn-success" id="btn-copy" onclick="copyClipboard()">Copy to Clipboard</button><button style="margin-left:20px;" class="btn btn-outline-dark" id="btn-init" onclick="init()">Reset</button>';
}
;
function buildCTA() {
    //consider a switch statement
    var ctaSelect = document.getElementById('cta-select').value;
    switch (ctaSelect) {
        case 'shopNow':
            var shopNowHref = document.getElementById('shop-now-href').value;
            var shopNowAlias = document.getElementById('shop-now-alias').value;
            ctaCode = '<table border="0" cellspacing="0" cellpadding="0" width="636"><tr><td align="left" valign="top"><div style="height: 57px;"><a href="' + shopNowHref + '" target="_blank" alias="' + shopNowAlias + '" title="Shop Now"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTAtest_ShopNow.gif" border="0" alt="Shop Now" title="Shop Now" height="57" width="636" style="display: block;"></a></div></td></tr></table>';
            break;
        case 'set7':
            var babyGirlHref = document.getElementById('baby-girl-href').value;
        var babyGirlAlias = document.getElementById('baby-girl-alias').value;
        var toddlerGirlHref = document.getElementById('toddler-girl-href').value;
        var toddlerGirlAlias = document.getElementById('toddler-girl-alias').value;
        var girlHref = document.getElementById('girl-href').value;
        var girlAlias = document.getElementById('girl-alias').value;
        var babyBoyHref = document.getElementById('baby-boy-href').value;
        var babyBoyAlias = document.getElementById('baby-boy-alias').value;
        var toddlerBoyHref = document.getElementById('toddler-boy-href').value;
        var toddlerBoyAlias = document.getElementById('toddler-boy-alias').value;
        var boyHref = document.getElementById('boy-href').value;
        var boyAlias = document.getElementById('boy-alias').value;
        var findStoreHref = document.getElementById('find-a-store-href').value;
        var findStoreAlias = document.getElementById('find-a-store-alias').value;
        ctaCode = '<table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"> <div style="height: 58px;"><a href="' + babyGirlHref + '" target="_blank" alias="' + babyGirlAlias + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BG.gif" border="0" alt="Baby Girl" title="Baby Girl" height="58" width="233" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + toddlerGirlHref + '" target="_blank" alias="' + toddlerGirlAlias + '" title="Toddler Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TG.gif" border="0" alt="Toddler Girl" title="Toddler Girl" height="58" width="170" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + girlHref + '" target="_blank" alias="' + girlAlias + '" title="Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KG.gif" border="0" alt="Girl" title="Girl" height="58" width="233" style="display: block;"></a></div></td></tr></table></td></tr><tr><td bgcolor="#ffffff" height="15" style="line-height:15px; font-size:15px;">&nbsp;</td></tr><tr><td align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"> <div style="height: 58px;"><a href="' + babyBoyHref + '" target="_blank" alias="' + babyBoyAlias + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BB.gif" border="0" alt="Baby Boy" title="Baby Boy" height="58" width="233" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + toddlerBoyHref + '" target="_blank" alias="' + toddlerBoyAlias + '" title="Toddler Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TB.gif" border="0" alt="Toddler Boy" title="Toddler Boy" height="58" width="170" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + boyHref + '" target="_blank" alias="' + boyAlias + '" title="Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KB.gif" border="0" alt="Boy" title="Boy" height="58" width="233" style="display: block;"></a></div></td></tr></table></td></tr><tr><td><div style="height: 72px;"><a href="' + findStoreHref + '" target="_blank" alias="' + findStoreAlias + '" title="Find A Store"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_FAS.gif" border="0" alt="Find A Store" title="Find A Store" height="72" width="636" style="display: block;"></a></div></td></tr></table>';
        break;
    case 'set6':
        var set6Input = document.getElementById('set6-input').value;
        var set6Array = set6Input.split(",");
        ctaCode = '<table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"> <div style="height: 58px;"><a href="' + set6Array[0] + '" target="_blank" alias="' + set6Array[6] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BG.gif" border="0" alt="Baby Girl" title="Baby Girl" height="58" width="233" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + set6Array[1] + '" target="_blank" alias="' + set6Array[7] + '" title="Toddler Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TG.gif" border="0" alt="Toddler Girl" title="Toddler Girl" height="58" width="170" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + set6Array[2] + '" target="_blank" alias="' + set6Array[8] + '" title="Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KG.gif" border="0" alt="Girl" title="Girl" height="58" width="233" style="display: block;"></a></div></td></tr></table></td></tr><tr><td bgcolor="#ffffff" height="15" style="line-height:15px; font-size:15px;">&nbsp;</td></tr><tr><td align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"> <div style="height: 58px;"><a href="' + set6Array[3] + '" target="_blank" alias="' + set6Array[9] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BB.gif" border="0" alt="Baby Boy" title="Baby Boy" height="58" width="233" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + set6Array[4] + '" target="_blank" alias="' + set6Array[10] + '" title="Toddler Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TB.gif" border="0" alt="Toddler Boy" title="Toddler Boy" height="58" width="170" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + set6Array[5] + '" target="_blank" alias="' + set6Array[11] + '" title="Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KB.gif" border="0" alt="Boy" title="Boy" height="58" width="233" style="display: block;"></a></div></td></tr></table></td></tr></table>';
        break;
    case 'girl3cta':
        var babyGirlHref = document.getElementById('baby-girl-href').value;
        var babyGirlAlias = document.getElementById('baby-girl-alias').value;
        var toddlerGirlHref = document.getElementById('toddler-girl-href').value;
        var toddlerGirlAlias = document.getElementById('toddler-girl-alias').value;
        var girlHref = document.getElementById('girl-href').value;
        var girlAlias = document.getElementById('girl-alias').value;
        ctaCode = '<table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"> <div style="height: 58px;"><a href="' + babyGirlHref + '" target="_blank" alias="' + babyGirlAlias + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BG.gif" border="0" alt="Baby Girl" title="Baby Girl" height="58" width="233" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + toddlerGirlHref + '" target="_blank" alias="' + toddlerGirlAlias + '" title="Toddler Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TG.gif" border="0" alt="Toddler Girl" title="Toddler Girl" height="58" width="170" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + girlHref + '" target="_blank" alias="' + girlAlias + '" title="Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KG.gif" border="0" alt="Girl" title="Girl" height="58" width="233" style="display: block;"></a></div></td></tr></table></td></tr></table>';
        break;
    case 'boy3cta':
        var babyBoyHref = document.getElementById('baby-boy-href').value;
        var babyBoyAlias = document.getElementById('baby-boy-alias').value;
        var toddlerBoyHref = document.getElementById('toddler-boy-href').value;
        var toddlerBoyAlias = document.getElementById('toddler-boy-alias').value;
        var boyHref = document.getElementById('boy-href').value;
        var boyAlias = document.getElementById('boy-alias').value;
        ctaCode = '<table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"> <div style="height: 58px;"><a href="' + babyBoyHref + '" target="_blank" alias="' + babyBoyAlias + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BB.gif" border="0" alt="Baby Boy" title="Baby Boy" height="58" width="233" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + toddlerBoyHref + '" target="_blank" alias="' + toddlerBoyAlias + '" title="Toddler Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TB.gif" border="0" alt="Toddler Boy" title="Toddler Boy" height="58" width="170" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 58px;"><a href="' + boyHref + '" target="_blank" alias="' + boyAlias + '" title="Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KB.gif" border="0" alt="Boy" title="Boy" height="58" width="233" style="display: block;"></a></div></td></tr></table></td></tr></table>';
        break;
    case 'shop2':
        var shopBoyHref = document.getElementById('shop-boy-href').value;
        var shopGirlHref = document.getElementById('shop-girl-href').value;
        var shopBoyAlias = document.getElementById('shop-boy-alias').value;
        var shopGirlAlias = document.getElementById('shop-girl-alias').value;
        ctaCode = '<table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"><div style="height: 59px;"><a href="' + shopGirlHref + '" target="_blank" alias="' + shopGirlAlias + '" title="Shop Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/112319_CAR_PM_03.jpg" border="0" alt="Shop Girl" title="Shop Girl" height="59" width="318" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 59px;"><a href="' + shopBoyHref + '" target="_blank" alias="' + shopBoyAlias + '" title="Shop Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/112319_CAR_PM_04.jpg" border="0" alt="Shop Boy" title="Shop Boy" height="59" width="318" style="display: block;"></a></div></td></tr></table></td></tr></table>';
        break;
    case 'baby2':
        var shopBoyHref = document.getElementById('shop-boy-href').value;
        var shopGirlHref = document.getElementById('shop-girl-href').value;
        var shopBoyAlias = document.getElementById('shop-boy-alias').value;
        var shopGirlAlias = document.getElementById('shop-girl-alias').value;
        ctaCode = '<table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="636"><tr><td align="left" valign="top"><div style="height: 59px;"><a href="' + shopGirlHref + '" target="_blank" alias="' + shopGirlAlias + '" title="Shop Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/112319_CAR_PM_03.jpg" border="0" alt="Shop Girl" title="Shop Girl" height="59" width="318" style="display: block;"></a></div></td><td align="left" valign="top"><div style="height: 59px;"><a href="' + shopBoyHref + '" target="_blank" alias="' + shopBoyAlias + '" title="Shop Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/112319_CAR_PM_04.jpg" border="0" alt="Shop Boy" title="Shop Boy" height="59" width="318" style="display: block;"></a></div></td></tr></table></td></tr></table>';
        break;
    default:
        ctaCode = '';
    }
};