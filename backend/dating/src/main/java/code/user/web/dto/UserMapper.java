package code.user.web.dto;

import code.user.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "status", ignore = true),
            @Mapping(target = "longitude", ignore = true),
            @Mapping(target = "latitude", ignore = true),
            @Mapping(target = "encryptedPassword", ignore = true),
            @Mapping(target = "createdAt", ignore = true)
    })
    public abstract User map(UserRegisterDto dto);

    public abstract UserDto map(User item);
}
