package credit.user.web.dto;

import credit.user.User;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2018-12-21T02:19:23+0300",
    comments = "version: 1.2.0.Final, compiler: javac, environment: Java 1.8.0_192 (Oracle Corporation)"
)
public class UserMapperImpl extends UserMapper {

    @Override
    public User map(UserRegisterDto dto) {
        if ( dto == null ) {
            return null;
        }

        User user = new User();

        user.setFirstName( dto.getFirstName() );
        user.setLastName( dto.getLastName() );
        user.setMiddleName( dto.getMiddleName() );
        user.setEmail( dto.getEmail() );
        user.setEncryptedPassword( dto.getEncryptedPassword() );

        return user;
    }
}
