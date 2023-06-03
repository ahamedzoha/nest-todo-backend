import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"

@Controller("users")
export class UsersController {
  // GET "/users" --> []
  @Get()
  getUsers(@Query("type") type: string) {
    return {
      type,
      users: [],
    }
  }
  // GET "/users/:id" --> {...}
  @Get(":id")
  getOneUser(@Param("id") id: string) {
    return {
      message: "fetched one user",
      id,
    }
  }
  // POST "/users"
  @Post()
  createOneUser(@Body() createUserDto: CreateUserDto) {
    return {
      name: createUserDto.name,
    }
  }
  // PUT "/users/:id" --> {...}
  @Put(":id")
  updateOneUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      message: "changed 1 user",
      id,
      name: updateUserDto.name,
    }
  }
  // DELETE "/users/:id"
  @Delete(":id")
  deleteOneUser(@Param("id") id: string) {
    return { message: "user deleted", id }
  }
}
