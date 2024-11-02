import style from './Avatar.module.css'

interface AvatarProps{
  hasBorder?: boolean;
  src: string;
  alt?: string
}
export function Avatar({hasBorder= true, src , alt} : AvatarProps) {
  
  return(
    <img 
    className={hasBorder ? style.avatarWithBorder:style.avatar}
     src={src} 
     alt={alt}
     />

  );
}





