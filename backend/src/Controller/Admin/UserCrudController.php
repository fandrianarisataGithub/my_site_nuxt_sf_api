<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\DBAL\Types\TextType;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AvatarField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }
    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('firstName')->hideOnIndex(),
            TextField::new('lastName')->hideOnIndex(),
            TextField::new('fullName')->onlyOnIndex(),
            EmailField::new('email'),
            TextField::new('password')->onlyOnForms(),
            TextField::new('imageFile')->setFormType(VichImageType::class)->onlyOnForms(),
            ImageField::new('avatarImage')
                ->setBasePath('/uploads/images/users/avatars/')
                ->setUploadDir('public/uploads/images/users/avatars')->hideOnForm()
        ];
    }
    
}
