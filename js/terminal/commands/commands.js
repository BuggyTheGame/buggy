import {MAN_DATA} from './man.js'

class EchoCommand
{
    echo(txt)
    {
        return txt;
    }
}
class ManCommand
{
    man(args)
    {
        return MAN_DATA[args];
    }

}

class RebootCommand
{
    reboot(args)
    {
        let text = "J'ai reboot batard"
        return text
    }
}

class HireCommand
{
    hire_devs(args)
    {
        let q = Number(args)
        if(!document.compagny.hire_devs(q))
        {
            let text = "Recrutement impossible"
            return text
        }
        let text = "Recrutement de: "+q+" devs";
        return text
    }
}

class AptCommand
{
    apt(args)
    {
        let splited_args = args.split(' ');
        if(splited_args[0] == "list")
        {
            let item_list = document.compagny.display_items()
            let final_str = ""
            for(let i = 0; i<item_list.length;i++)
            {
                final_str += item_list[i]['id']+ "| "+item_list[i]['item_name']+ " | x"+item_list[i]['item_modifier']+" | "+ item_list[i]['item_price'] +" bugs \n"
            }
            return final_str
        }
        if(splited_args[0] == "install" && (splited_args[1] != " "))
        {
            if(document.compagny.update_modifier(Number(splited_args[1])))
            {
                return "Le paquet "+splited_args[1]+" a été correctement installé"
            }
            else
            {
                return "Tu n'es pas assez buggé ou tu as déjà acheté ce module"
            }
        }
        else
        {
            return "Défauts d'argument -> man apt"
        }
    }
}

export {EchoCommand, ManCommand, RebootCommand, HireCommand, AptCommand}