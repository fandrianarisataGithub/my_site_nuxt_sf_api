<?php

namespace App\Controller\Admin;

use App\Entity\Home;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;

class HomeCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Home::class;
    }
    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('titleH1'),
            TextEditorField::new('details'),
            TextField::new('imageFile')->setFormType(VichImageType::class)->onlyOnForms(),
            ImageField::new('image')
                ->setBasePath('/uploads/images/home/')
                ->setUploadDir('public/uploads/images/home')->hideOnForm(),
            TextField::new('metaTitle'),
            TextField::new('metaKey'),
            TextareaField::new('metaDescription')
            
        ];
    }
    public function configureActions(Actions $actions): Actions
    {
        return parent::configureActions($actions)
        ->disable(Action::DETAIL)
        ;
    }
    
}
