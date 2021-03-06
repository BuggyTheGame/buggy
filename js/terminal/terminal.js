import Parser from './parser/parser.js'
let PARSER = new Parser();

//allow easier execution of commands
function execute(brut_txt)
{
    let cmd_out = PARSER.cmd_parser(brut_txt);

    let FINAL_STRING = "<div class=\"sub-cmd\"><div class=\"submited-cmd row\"><div class=\"prefix\"> yanis@buggy:</div>~$ "+ brut_txt +"</div><div class=\"cmd-return\">"+ cmd_out +"</div></div>"

    return FINAL_STRING;
}

$(document).ready(function(){
    $('.cmd-input').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            let output = execute($(this).val())
           $("#command-terminal").append(output);
           $(this).val('');
        }
    });
  });