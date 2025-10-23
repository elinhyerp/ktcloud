import { Injectable } from '@nestjs/common';
import type { PostDto } from './blog.model';
import { BlogRepositoryImpl } from './blog.repository';

@Injectable()
export class BlogService {
  // posts: PostDto[] = [];
  constructor(private readonly blogRepository: BlogRepositoryImpl) {}

  async getAllPosts(): Promise<PostDto[]> {
    // return this.posts;
    return await this.blogRepository.getAllPosts();
  }

  createPost(postDto: PostDto) {
    // const id = this.posts.length + 1;
    // this.posts.push({ ...postDto, id: id.toString(), createdDt: new Date() });
    this.blogRepository.createPost(postDto);
  }

  getPost(id: string) {
    console.log(`[id: ${id}] 게시글 하나 가져오기`);
    return this.blogRepository.getPost(id);
  }

  delete(id: string) {
    console.log(`[id: ${id}] 게시글 하나 삭제하기`);
    this.blogRepository.delete(id);
  }

  updatePost(id: string, postDto: PostDto) {
    console.log(`[id: ${id}, postDto: ${postDto.id}]  게시글 하나 수정하기`);
    this.blogRepository.updatePost(id, postDto);
  }
}
