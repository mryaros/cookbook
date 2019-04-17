package org.service;

import org.domains.Category;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class CategoryService {
    private HashMap<Integer, Category> categories;
    private AtomicInteger idSingle;

    private CategoryService(){}
    public static CategoryService getInstance(){
        return SingletonHolder.instance;
    }
    private static final class SingletonHolder{
        private static final CategoryService instance = new CategoryService();
    }

    public void addCategory(String name){
        int id = idSingle.addAndGet(1);
        categories.put(id, new Category(name, id));
    }
    public void deleteCategory(int id){
        categories.remove(id);
    }
    public void updateCategory(String name, int id){
        categories.get(id).setName(name);
    }
    public Category getCategory(int id){
        return categories.get(id);
    }
    public ArrayList<Category> getCategories(){
        ArrayList<Category> categoriesAll = new ArrayList<Category>();
        for(Category category : categories.values())
            categoriesAll.add(category);
        return categoriesAll;
    }

    public boolean isExists(String name){
        for (Category category : categories.values()){
            if (category.getName().equals(name))
                return true;
        }
        return false;
    }
}
