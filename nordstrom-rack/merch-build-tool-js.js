// Add images UI
var alias, width, height, alt, src, href, alias1, width1, height1, alt1, src1, href1, alias2, width2, height2, alt2, src2, href2, alias3, width3, height3, alt3, src3, href3, alias4, width4, height4, alt4, src4, href4, i, displayI, newRowID, n, p;
// i is the index of rows
i = 0;
// displayI is used for display purposes to show in the browser which row you're on/adding
displayI = i + 1;
// n is the index for each image, different from i because there can be up to 4 images per row
n = 1;
// newRowID gives the new rows an id so we can identify them with jQuery to append and remove
newRowID = 'new-image-' + i;
// rows array keeps track of rows
var rows = [];
// columnOrder array holds values for which type of content we're adding (1, 2, 3, or 4 column sections)
const columnOrder = [];

// Event listener for Add Row button
document.getElementById('add-row').addEventListener('click', function() {
    // Add the remove row button once one row has been added
    if (rows.length >= 0) {
         document.getElementById('remove-row').innerHTML = '<button style="margin-left:20px;" class="btn btn-outline-danger" onclick="removeRow()">Remove Row</button>';
    }
    addRow();
});

// Compile Code button event listener
document.getElementById('btn-compile').addEventListener('click', () => {
    compileCode();
});

// Copy Clipboard function
function copyClipboard() {
    var copyText = document.getElementById("code-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // Give a success message
    document.getElementById('success-message').innerHTML = 'Code successfully copied!';
};

// Add Row function
function addRow() {
    // Increase i to keep track of the number of input rows we are logging
    i++;
    console.log(i);
    displayI = i;
    // Gives the new rows an id so we can identify them with jQuery to append and remove
    newRowID = 'new-image-' + i;
    // Get the value of the column select dropdown to determine how many input fields to display
    var columnSelect = document.getElementById('column-select').value;
    var rowTemplate;
    // Switch statement for 1, 2, 3, & 4 columns (the options of the column select dropdown)
    switch (columnSelect) {
        case 'column1':
            // We use the n variable to keep track of the ids since this is different from i
            rowTemplate = '<div id="' + newRowID + '" style="padding-bottom:20px;border-bottom:1px solid #E6E6E6;">' + 
                '<div class="row">' +
                    '<div class="col-lg-6">' + 
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + n + ')" id="image-src-' + n + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + n + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + n + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-lg-6 text-left">' + 
                        '<div id="my-image-spot-' + n + '">' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
            // Push i into the rows array, to keep track of rows.length 
            rows.push(i);
            // Push 1 into the columnOrder array to indicate this is a 1 column row
            columnOrder.push(1);
            // Append this row template to the div with the #more-images id 
            $('#more-images').append(rowTemplate);
            // Increment n by 1, since this was a 1 column input
            n++;
            console.log(n);
            break;
        case 'column2':
            rowTemplate = '<div id="' + newRowID + '">' + 
                '<div class="row">' +
                    '<div class="col-lg-6">' + 
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + n + ')" id="image-src-' + n + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + n + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + n + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 1) + '">Row ' + displayI + ' Image 2 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + (n + 1) + ')" id="image-src-' + (n + 1) + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 1) + '">Row ' + displayI + ' Image 2 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + (n + 1) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 1) + '">Row ' + displayI + ' Image 2 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + (n + 1) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-lg-6 text-left">' + 
                        '<div id="my-image-spot-' + n + '" style="display:table-cell;">' +
                        '</div>' +
                        '<div id="my-image-spot-' + (n + 1) + '" style="display:table-cell;">' +
                        '</div>' +
                    '</div>' +
                '</div>' + 
            '</div>';
            rows.push(i);
            // Push 2 into the columnOrder array to indicate this is a 2 column row
            columnOrder.push(2);
            $('#more-images').append(rowTemplate);
            // Increment n by 2, since this was a 2 column input
            n = n + 2;
            console.log(n);
            break;
        case 'column3':
            rowTemplate = '<div id="' + newRowID + '">' + 
                '<div class="row">' +
                    '<div class="col-lg-6">' + 
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + n + ')" id="image-src-' + n + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + n + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + n + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 1) + '">Row ' + displayI + ' Image 2 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + (n + 1) + ')" id="image-src-' + (n + 1) + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 1) + '">Row ' + displayI + ' Image 2 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + (n + 1) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 1) + '">Row ' + displayI + ' Image 2 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + (n + 1) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 2) + '">Row ' + displayI + ' Image 3 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + (n + 2) + ')" id="image-src-' + (n + 2) + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 2) + '">Row ' + displayI + ' Image 3 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + (n + 2) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 2) + '">Row ' + displayI + ' Image 3 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + (n + 2) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-lg-6 text-left">' + 
                        '<div id="my-image-spot-' + n + '" style="display:table-cell;">' +
                        '</div>' +
                        '<div id="my-image-spot-' + (n + 1) + '" style="display:table-cell;">' +
                        '</div>' +
                        '<div id="my-image-spot-' + (n + 2) + '" style="display:table-cell;">' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
            rows.push(i);
            // Push 3 into the columnOrder array to indicate this is a 3 column row
            columnOrder.push(3);
            $('#more-images').append(rowTemplate);
            // Increment n by 3, since this was a 3 column input
            n = n + 3;
            break;
        case 'column4':
            rowTemplate = '<div id="' + newRowID + '">' + 
                '<div class="row">' +
                    '<div class="col-lg-6">' + 
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + n + ')" id="image-src-' + n + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + n + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + n + '">Row ' + displayI + ' Image 1 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + n + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 1) + '">Row ' + displayI + ' Image 2 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + (n + 1) + ')" id="image-src-' + (n + 1) + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 1) + '">Row ' + displayI + ' Image 2 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + (n + 1) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 1) + '">Row ' + displayI + ' Image 2 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + (n + 1) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 2) + '">Row ' + displayI + ' Image 3 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + (n + 2) + ')" id="image-src-' + (n + 2) + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 2) + '">Row ' + displayI + ' Image 3 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + (n + 2) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 2) + '">Row ' + displayI + ' Image 3 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + (n + 2) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 3) + '">Row ' + displayI + ' Image 3 Src</label>' +
                                    '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + (n + 3) + ')" id="image-src-' + (n + 3) + '">' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 3) + '">Row ' + displayI + ' Image 3 Href</label>' +
                                    '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + (n + 3) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row">' +
                            '<div class="col-lg-6 text-left">' +
                                '<div class="form-group">' +
                                    '<label for="image' + (n + 3) + '">Row ' + displayI + ' Image 3 Alt Text</label>' +
                                    '<input type="text" placeholder="Image Alt Text" class="form-control" id="image-alt-' + (n + 3) + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-lg-6 text-left">' + 
                        '<div id="my-image-spot-' + n + '" style="display:table-cell;">' +
                        '</div>' +
                        '<div id="my-image-spot-' + (n + 1) + '" style="display:table-cell;">' +
                        '</div>' +
                        '<div id="my-image-spot-' + (n + 2) + '" style="display:table-cell;">' +
                        '</div>' +
                        '<div id="my-image-spot-' + (n + 3) + '" style="display:table-cell;">' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
            rows.push(i);
            // Push 4 into the columnOrder array to indicate this is a 4 column row
            columnOrder.push(4);
            $('#more-images').append(rowTemplate);
            // Increment n by 4, since this was a 4 column input
            n = n + 4;
            break;
        default:
            document.getElementById('more-images').innerHTML = '';
        }
    console.log(rows);
    console.log(columnOrder);
};

function removeRow() {
    // Runs when the Remove Row button is clicked
    // Log i and the rows array so we can visually keep track of it in the console, and pop the last item off the end of the rows array since we're removing it visually
    // Decrement n appropriately based on columnOrder
    var nIndex = i - 1;
    if (columnOrder[nIndex] === 1) {
        n--;
    } else if (columnOrder[nIndex] === 2) {
        n = n - 2;
    } else if (columnOrder[nIndex] === 3) {
        n = n - 3;
    } else if (columnOrder[nIndex] === 4) {
        n = n - 4;
    };
    console.log(i);
    console.log(n);
    rows.pop();
    columnOrder.pop();
    console.log(columnOrder);
    console.log(rows);
    // Determine which div to remove, remove it with jQuery, and decrement i
    newRowID = '#new-image-' + i;
    $(newRowID).remove();
    --i;
    // If all rows have been removed, we don't need to display the remove row button so we're removing it here
    if (i < 1) {
        document.getElementById('remove-row').innerHTML = '';
    }
};

// Compile code function
const compileCode = () => {
    // add button to copy code to clipboard
    copyButton();
    // Set row index, which will be used identify the id's to return input values
    var rowIndex = 1;
    // Remove the content manipulation buttons once you click compile code
    removeButtons();
    // Initialize the tableRow array, which will be what is printed into the text area as the compiled code output
    var tableRow = [];
    // Log to the console the array containing the order of columns, columnOrder is used to determine which column (1, 2, 3, or 4) we are trying to build
    console.log(columnOrder);

    // Loop through input rows to create fully compiled code
    for (i = 1; i <= rows.length; i++) {
        // arrayOrder is set to i - 1 since i is at 1 now and arrays start at 0, this is used to tell the if statement which array value (and corresponding column selection) we're trying to build
        var arrayOrder = i - 1;
        
        // switch (if) statement with the 4 column options
        switch (columnOrder[arrayOrder]) {
            case 1:
                // We are building a one column table
                // get values for the inputs
                src = document.getElementById('image-src-' + rowIndex).value;
                href = document.getElementById('image-href-' + rowIndex).value;
                alt = document.getElementById('image-alt-' + rowIndex).value;
                width = document.getElementById('my-image-' + rowIndex).naturalWidth;
                height = document.getElementById('my-image-' + rowIndex).naturalHeight;
                // Compile the table code for this row of inputs
                tableRow[i] = '<table class="row collapse" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%;">\n    <tr>\n     <th class="main_content small-12 large-12 columns first last" style="margin:0 auto;padding:0;padding-left:0;padding-right:0;padding-top:0px;text-align:left;width:648px;">\n            <a href="%%=redirectTo(concat(\'' + href + '\',\'?\', WAT(\'static2\',\'tile' + i + '\')))=%%" target="_blank" style="margin:0;padding:0;"><img width="' + width + '" height="' + height + '" src="' + src + '" alt="' + alt + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:' + width + 'px;"></a>\n        </th>\n    </tr>\n</table>\n';
                // Add 1 to the row index since this was a 1 column table, this is to keep the rowIndex variable in line with the # of input fields we are taking in
                rowIndex++;
            break;
            case 2:
                // We are building a 2 column table
                // Since we have a 2 column table, there will be 2 sets of inputs, to distinguish we create this variable and make it be 1 higher than the original rowIndex
                var rowIndex2 = rowIndex + 1;
                // get values for the inputs
                src = document.getElementById('image-src-' + rowIndex).value;
                href = document.getElementById('image-href-' + rowIndex).value;
                alt = document.getElementById('image-alt-' + rowIndex).value;
                width = document.getElementById('my-image-' + rowIndex).naturalWidth;
                height = document.getElementById('my-image-' + rowIndex).naturalHeight;
                src2 = document.getElementById('image-src-' + rowIndex2).value;
                href2 = document.getElementById('image-href-' + rowIndex2).value;
                alt2 = document.getElementById('image-alt-' + rowIndex2).value;
                width2 = document.getElementById('my-image-' + rowIndex2).naturalWidth;
                height2 = document.getElementById('my-image-' + rowIndex2).naturalHeight;
                // Compile the table code for this row of inputs
                tableRow[i] = '<table class="row collapse no-bot-pad w100P" width="640" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;">\n    <tr>\n       <th style="margin:0;padding:0;">\n          <a href="%%=redirectTo(concat(\'' + href + '\',\'?\', WAT(\'static2\',\'tile' + i + '-1\')))=%%" target="_blank" style="margin:0;padding:0;"><img width="' + width + '" height="' + height + '" src="' + src + '" alt="' + alt + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:auto;"></a>\n      </th>\n     <th style="margin:0;padding:0;">\n          <a href="%%=redirectTo(concat(\'' + href2 + '\',\'?\', WAT(\'static2\',\'tile' + i + '-2\')))=%%" target="_blank" style="margin:0;padding:0;"><img width="' + width2 + '" height="' + height2 + '" src="' + src2 + '" alt="' + alt2 + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:auto;"></a>\n      </th>\n    </tr>\n</table>\n';
                // This time we add 2 to the rowIndex variable, since we have a 2 column table here, this is to keep the rowIndex variable in line with the # of input fields we are taking in
                rowIndex = rowIndex + 2;
            break;
            case 3:
                // We are building a 3 column table
                var rowIndex2 = rowIndex + 1;
                var rowIndex3 = rowIndex2 + 1;
                // get values for the inputs
                src = document.getElementById('image-src-' + rowIndex).value;
                href = document.getElementById('image-href-' + rowIndex).value;
                alt = document.getElementById('image-alt-' + rowIndex).value;
                width = document.getElementById('my-image-' + rowIndex).naturalWidth;
                height = document.getElementById('my-image-' + rowIndex).naturalHeight;
                src2 = document.getElementById('image-src-' + rowIndex2).value;
                href2 = document.getElementById('image-href-' + rowIndex2).value;
                alt2 = document.getElementById('image-alt-' + rowIndex2).value;
                width2 = document.getElementById('my-image-' + rowIndex2).naturalWidth;
                height2 = document.getElementById('my-image-' + rowIndex2).naturalHeight;
                src3 = document.getElementById('image-src-' + rowIndex3).value;
                href3 = document.getElementById('image-href-' + rowIndex3).value;
                alt3 = document.getElementById('image-alt-' + rowIndex3).value;
                width3 = document.getElementById('my-image-' + rowIndex3).naturalWidth;
                height3 = document.getElementById('my-image-' + rowIndex3).naturalHeight;
                // Compile the table code for this row of inputs
                tableRow[i] = '<table class="row collapse w100P" border="0" cellspacing="0" cellpadding="0" width="640" style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%;">\n    <tr>\n       <td width="' + width + '" style="-moz-hyphens:auto;-webkit-hyphens:auto;margin:0;padding:0;vertical-align:top;">\n             <a href="%%=redirectTo(concat(\'' + href + '\', \'?\', WAT(\'static2\',\'tile' + i + '-1\')))=%%" style="margin:0;padding:0;"><img src="' + src + '" alt="' + alt + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:auto;"></a>\n        </td>\n        <td width="' + width2 + '" style="-moz-hyphens:auto;-webkit-hyphens:auto;margin:0;padding:0;vertical-align:top;">\n             <a href="%%=redirectTo(concat(\'' + href2 + '\', \'?\', WAT(\'static2\',\'tile' + i + '-2\')))=%%" style="margin:0;padding:0;"><img src="' + src2 + '" alt="' + alt2 + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:auto;"></a>\n         </td>\n         <td width="' + width3 + '" style="-moz-hyphens:auto;-webkit-hyphens:auto;margin:0;padding:0;vertical-align:top;">\n             <a href="%%=redirectTo(concat(\'' + href3 + '\', \'?\', WAT(\'static2\',\'tile' + i + '-3\')))=%%" style="margin:0;padding:0;"><img src="' + src3 + '" alt="' + alt3 + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:auto;"></a>\n        </td>\n     </tr>\n</table>\n';
                // Add 3 to the rowIndex variable, since we have a 3 column table here, keeping the rowIndex variable in line with the # of input fields we are taking in
                rowIndex = rowIndex + 3;
            break;
            case 4:
                // We are building a 4 column table
                var rowIndex2 = rowIndex + 1;
                var rowIndex3 = rowIndex2 + 1;
                var rowIndex4 = rowIndex3 + 1;
                // get values for the inputs
                src = document.getElementById('image-src-' + rowIndex).value;
                href = document.getElementById('image-href-' + rowIndex).value;
                alt = document.getElementById('image-alt-' + rowIndex).value;
                width = document.getElementById('my-image-' + rowIndex).naturalWidth;
                height = document.getElementById('my-image-' + rowIndex).naturalHeight;
                src2 = document.getElementById('image-src-' + rowIndex2).value;
                href2 = document.getElementById('image-href-' + rowIndex2).value;
                alt2 = document.getElementById('image-alt-' + rowIndex2).value;
                width2 = document.getElementById('my-image-' + rowIndex2).naturalWidth;
                height2 = document.getElementById('my-image-' + rowIndex2).naturalHeight;
                src3 = document.getElementById('image-src-' + rowIndex3).value;
                href3 = document.getElementById('image-href-' + rowIndex3).value;
                alt3 = document.getElementById('image-alt-' + rowIndex3).value;
                width3 = document.getElementById('my-image-' + rowIndex3).naturalWidth;
                height3 = document.getElementById('my-image-' + rowIndex3).naturalHeight;
                src4 = document.getElementById('image-src-' + rowIndex4).value;
                href4 = document.getElementById('image-href-' + rowIndex4).value;
                alt4 = document.getElementById('image-alt-' + rowIndex4).value;
                width4 = document.getElementById('my-image-' + rowIndex4).naturalWidth;
                height4 = document.getElementById('my-image-' + rowIndex4).naturalHeight;
                // Compile the table code for this row of inputs
                tableRow[i] = '<table class="row collapse w100P" border="0" cellspacing="0" cellpadding="0" width="640" style="border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%;">\n    <tr>\n       <td width="' + width + '" style="-moz-hyphens:auto;-webkit-hyphens:auto;margin:0;padding:0;vertical-align:top;">\n             <a href="%%=redirectTo(concat(\'' + href + '\', \'?\', WAT(\'static2\',\'tile' + i + '-1\')))=%%" style="margin:0;padding:0;"><img src="' + src + '" alt="' + alt + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:auto;"></a>\n        </td>\n        <td width="' + width2 + '" style="-moz-hyphens:auto;-webkit-hyphens:auto;margin:0;padding:0;vertical-align:top;">\n             <a href="%%=redirectTo(concat(\'' + href2 + '\', \'?\', WAT(\'static2\',\'tile' + i + '-2\')))=%%" style="margin:0;padding:0;"><img src="' + src2 + '" alt="' + alt2 + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:auto;"></a>\n         </td>\n         <td width="' + width3 + '" style="-moz-hyphens:auto;-webkit-hyphens:auto;margin:0;padding:0;vertical-align:top;">\n             <a href="%%=redirectTo(concat(\'' + href3 + '\', \'?\', WAT(\'static2\',\'tile' + i + '-3\')))=%%" style="margin:0;padding:0;"><img src="' + src3 + '" alt="' + alt3 + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:auto;"></a>\n        </td>\n         <td width="' + width4 + '" style="-moz-hyphens:auto;-webkit-hyphens:auto;margin:0;padding:0;vertical-align:top;">\n             <a href="%%=redirectTo(concat(\'' + href4 + '\', \'?\', WAT(\'static2\',\'tile' + i + '-4\')))=%%" style="margin:0;padding:0;"><img src="' + src4 + '" alt="' + alt4 + '" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;width:auto;"></a>\n        </td>\n     </tr>\n</table>\n';
                // Add 4 to the rowIndex variable, since we have a 4 column table here, keeping the rowIndex variable in line with the # of input fields we are taking in
                rowIndex = rowIndex + 4;
            break;

        }
    }
     // Join the array & output code
     tableRow = tableRow.join('');
     document.getElementById('code-output').textContent = tableRow;
};

function init() {
    // Reload the page if you click the Reset button
    window.location.reload(true);
};

function copyButton() {
    // Add the copy to clipboard button, runs when the Compile Code button is clicked
    document.getElementById('copy-button').innerHTML = '<button class="btn btn-success" id="btn-copy" onclick="copyClipboard()">Copy to Clipboard</button><button style="margin-left:20px;" class="btn btn-outline-dark" id="btn-init" onclick="init()">Reset</button>';
};

function removeButtons() {
    $('#content-buttons').remove();
};

// Function called onchange on the src input, pass in n (id index) as p
function handleImage(p) {
    // Determine which img src we're looking at and get its value
    var imageSource = 'image-src-' + p;
    src = document.getElementById(imageSource).value;
    // If the src isn't empty, we create the img tag to put into the #my-image-spot-p div ID
    if (src != "") {
        var imgTemplate = '<img src="' + src + '" onload="this.width/=1.5;" id="my-image-' + p + '" />';
    } else {
        imgTemplate = '';
    };
    console.log(imgTemplate);
    $('#my-image-spot-' + p).html(imgTemplate);
};
