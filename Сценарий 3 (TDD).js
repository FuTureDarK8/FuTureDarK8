package Prac;

public class PasswordValidator {
    public static boolean isValid(String Password)
    {
        if(Password.lenght()>=5 && Password.lenght()<=10)
        {
            return true;
        }
        else
            return false;
    }
}