import { TodoService } from './todo.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Header,
  Patch,
  Delete,
} from '@nestjs/common/decorators';
import { CreateTodo } from './dto/create-todo.dto';
import { HttpStatus } from '@nestjs/common/enums';
import { ChangeTodo } from './dto/change-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.findAll();
  }
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  update(@Body() changeTodo: ChangeTodo, @Param('id') id: string) {
    return this.todoService.update(id, changeTodo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createTodo(@Body() todo: CreateTodo) {
    return this.todoService.create(todo);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
