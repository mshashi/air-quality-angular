export class Utils {
    
    public static getColorCode(val:number){
        let color = '#1F962F'

        if(val>50 && val<=100){
            return '#2AD541';
        }else if (val>100 && val<=200){
            return '#EAD226';
        }else if (val>200 && val<=300){
            return '#E3951C';
        }else if(val>300 && val<=400){
            return '#F53639';
        }else if (val>400){
            return '#C62316';
        }
        
            
        return color;
    } 
}
