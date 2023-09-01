<?php

namespace App\Controller\Admin;

use App\Entity\Blog;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;

class BlogCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Blog::class;
    }
    
    
    public function configureFields(string $pageName): iterable
    {
        // return [
        //     IdField::new('id'),
        //     TextField::new('title'),
        //     TextEditorField::new('description'),
        // ];
        yield AssociationField::new('author');
        yield TextField::new('title');
        //yield SlugField::new('slug')->setTargetFieldName('title');
        yield TextField::new('slug')->hideOnForm();
        yield TextareaField::new('text');
        yield DateTimeField::new('createdAt');// le mi-afficher eo amle liste

        // if(Crud::PAGE_EDIT === $pageName){
        //     yield $createdAt->setFormTypeOption('disabled', true);
        // }else{
        //     yield $createdAt;
        // }
    }
    
}
