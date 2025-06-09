import { z } from "zod";

export const HeroWidgetSchema = z.object({
  title: z.string(),
  imageSrc: z.string().url(),
  subtitle: z.string().optional(),
  imageAlt: z.string().optional(),
  imageHref: z.string().optional(),
  buttonText: z.string().optional(),
  buttonHref: z.string().url().optional(),
  className: z.string().optional(),
});

export type HeroWidgetType = z.infer<typeof HeroWidgetSchema>;

export const MarkdownWidgetSchema = z.object({
  content: z.string(),
  className: z.string().optional(),
});

export type MarkdownWidgetType = z.infer<typeof MarkdownWidgetSchema>;

export const CarouselWidgetSchema = z.object({
  autoplay: z.boolean().default(true),
  interval: z.number().default(3000),
  className: z.string().optional(),
  items: z.array(
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      imageSrc: z.string().url(),
      imageAlt: z.string().optional(),
      imageHref: z.string().optional(),
      buttonText: z.string().optional(),
      buttonHref: z.string().url().optional(),
      order: z.number().optional(),
      className: z.string().optional(),
    })
  ),
});

export type CarouselWidgetType = z.infer<typeof CarouselWidgetSchema>;

export const FeatureListWidgetSchema = z.object({
  className: z.string().optional(),
  items: z.array(
    z.object({
      icon: z.string().optional(),
      imageSrc: z.string().url().optional(),
      imageAlt: z.string().optional(),
      title: z.string(),
      subtitle: z.string().optional(),
      order: z.number().optional(),
      className: z.string().optional(),
    })
  ),
});

export type FeatureListWidgetType = z.infer<typeof FeatureListWidgetSchema>;

export const TestimonialWidgetSchema = z.object({
  className: z.string().optional(),
  items: z.array(
    z.object({
      name: z.string(),
      message: z.string(),
      imageSrc: z.string().url().optional(),
      imageAlt: z.string().optional(),
      rating: z.number().min(0).max(5),
      order: z.number().optional(),
      className: z.string().optional(),
    })
  ),
});

export type TestimonialWidgetType = z.infer<typeof TestimonialWidgetSchema>;

export const MultiHeroWidgetSchema = z.object({
  className: z.string().optional(),
  items: z.array(
    z.object({
      title: z.string(),
      imageSrc: z.string().url(),
      subtitle: z.string().optional(),
      imageAlt: z.string().optional(),
      imageHref: z.string().optional(),
      buttonText: z.string().optional(),
      buttonHref: z.string().url().optional(),
      order: z.number().optional(),
      className: z.string().optional(),
    })
  ),
});

export type MultiHeroWidgetType = z.infer<typeof MultiHeroWidgetSchema>;

export const TabsWidgetSchema = z.object({
  className: z.string().optional(),
  items: z.array(
    z.object({
      label: z.string(),
      content: z.string(),
      order: z.number(),
      className: z.string().optional(),
    })
  ),
});

export type TabsWidgetType = z.infer<typeof TabsWidgetSchema>;

export const FaqWidgetSchema = z.object({
  className: z.string().optional(),
  items: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
      order: z.number(),
      className: z.string().optional(),
    })
  ),
});

export type FaqWidgetType = z.infer<typeof FaqWidgetSchema>;
