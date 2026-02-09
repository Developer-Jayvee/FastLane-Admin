import styles from "@/components/ui/styles/button.module.css"
import { IconName } from "@/utils/icons";
import { Icon } from "@/hooks/useIcons";

type ButtonProps = {
    btnText?: string;
    isIcon?: boolean;
    iconName?:IconName;
    handleClick?: () => void;
}
export default function Button({ btnText = 'default' , isIcon  = false , iconName = 'editpencil' , handleClick }: ButtonProps){
    
    return (
        <>
            <button className={styles.btns} role="button" onClick={handleClick}>
                {
                   !isIcon ? btnText : ( <Icon name={iconName} /> ) 
                }
            </button>
        </>
    )
}