import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function ProductCard({ title, description, price, features = [], ctaText = "Saiba Mais", onCtaClick, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg bg-card">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-6 flex flex-col">
          {description && (
            <CardDescription className="text-base leading-relaxed text-muted-foreground mb-6">
              {description}
            </CardDescription>
          )}
          
          {features && features.length > 0 && (
            <ul className="space-y-3 flex-grow">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {price && (
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-3xl font-bold text-foreground">{price}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0 mt-auto">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProductCard;