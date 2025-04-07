'use client'; // 声明为客户端组件
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// 定义轮播项类型
interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  rating: number; // 评分
}

// 组件 Props 类型
interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

// 定义 Swiper 按钮图标类型（可替换为实际图标组件）
interface SwiperButtonProps {
  isPrev?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

const SwiperButton = ({ isPrev, isDisabled, onClick }: SwiperButtonProps) => {
  return (
    <button
      className={`swiper-button-${isPrev ? 'prev' : 'next'} transition-opacity ${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}
      aria-label={isPrev ? 'Previous testimonial' : 'Next testimonial'}
      onClick={onClick}
      disabled={isDisabled}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        {isPrev ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
          />
        )}
      </svg>
    </button>
  );
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  // 模拟 Swiper 初始化（实际需引入 Swiper 库）
  useEffect(() => {
    // 这里可以添加实际的 Swiper 初始化逻辑
    // const swiper = new Swiper(swiperRef.current, { /* 配置项 */ });
    // swiper.on('slideChange', () => {
    //   setCurrentSlide(swiper.realIndex);
    //   setIsNextDisabled(swiper.isEnd);
    // });
  }, []);

  return (
    <section className="pb-11.5">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="swiper testimonial-carousel common-carousel p-5">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
                <Image 
                  alt="icon" 
                  width={17} 
                  height={17} 
                  src="/images/icons/icon-08.svg" 
                  style={{ color: 'transparent' }}
                  loading="lazy"
                  decoding="async"
                />
                Testimonials
              </span>
              <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">User Feedbacks</h2>
            </div>
            <div className="flex items-center gap-3">
              <SwiperButton isPrev onClick={() => setCurrentSlide(prev => prev - 1)} />
              <SwiperButton isPrev={false} isDisabled={isNextDisabled} onClick={() => setCurrentSlide(prev => prev + 1)} />
            </div>
          </div>

          <div 
            ref={swiperRef} 
            className="swiper swiper-initialized swiper-horizontal testimonial-swiper swiper-backface-hidden"
          >
            <div className="swiper-wrapper" style={{ transform: `translate3d(${-currentSlide * 400}px, 0px, 0px)` }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`swiper-slide ${index === currentSlide ? 'swiper-slide-active' : ''}`} 
                  style={{ width: '376.667px', marginRight: '20px' }}
                >
                  <div className="shadow-testimonial bg-white rounded-[10px] py-7.5 px-4 sm:px-8.5 m-1">
                    {/* 评分星星 */}
                    <div className="flex items-center gap-1 mb-5">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Image 
                          key={i} 
                          alt="star icon" 
                          width={15} 
                          height={15} 
                          src="/images/icons/icon-star.svg" 
                          style={{ color: 'transparent' }}
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>

                    {/* 反馈内容 */}
                    <p className="text-dark mb-6">{testimonial.text}</p>

                    {/* 作者信息 */}
                    <a className="flex items-center gap-4" href="#">
                      <div className="w-12.5 h-12.5 rounded-full overflow-hidden">
                        <Image 
                          src={testimonial.author.image} 
                          alt={testimonial.author.name} 
                          width={50} 
                          height={50} 
                          className="w-12.5 h-12.5 rounded-full"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-dark">{testimonial.author.name}</h3>
                        <p className="text-custom-sm">{testimonial.author.title}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 使用示例
export default function HomePage() {
  // 示例数据
  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitae augue suscipit vehicula',
      author: {
        name: 'Davis Dorwart',
        title: 'Serial Entrepreneur',
        image: '/images/users/user-01.jpg'
      },
      rating: 5
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitae augue suscipit vehicula',
      author: {
        name: 'Davis Dorwart',
        title: 'Serial Entrepreneur',
        image: '/images/users/user-01.jpg'
      },
      rating: 5
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitae augue suscipit vehicula',
      author: {
        name: 'Davis Dorwart',
        title: 'Serial Entrepreneur',
        image: '/images/users/user-01.jpg'
      },
      rating: 5
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitae augue suscipit vehicula',
      author: {
        name: 'Davis Dorwart',
        title: 'Serial Entrepreneur',
        image: '/images/users/user-01.jpg'
      },
      rating: 5
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitae augue suscipit vehicula',
      author: {
        name: 'Davis Dorwart',
        title: 'Serial Entrepreneur',
        image: '/images/users/user-01.jpg'
      },
      rating: 5
    },
  ];

  return (
    <TestimonialCarousel testimonials={defaultTestimonials} />
  );
}